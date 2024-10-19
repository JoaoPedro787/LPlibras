import React, { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';

//Classes
import { IntroductionC } from './components/IntroductionC';
import { StagePages } from './components/stagePages';

const Phase = ({ route, drawerHandler, data, currentIndex }) => {
    // Largura da tela
    const { width } = useWindowDimensions();

    // Pegando dados da rota
    const { title } = route.params;

    // useRef para o ScrollView
    const scroll = useRef();

    // Rolando o ScrollView para a posição do currentIndex quando o componente monta
    useEffect(() => {
        if (scroll.current) {
            scroll.current.scrollTo({ x: currentIndex * width, animated: false });
        }
    }, [currentIndex, width]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                ref={scroll}
                style={{ flex: 1 }}
                scrollEnabled={currentIndex === 1 ? false : true}
                pagingEnabled
                horizontal={true}
                onMomentumScrollEnd={(evt) => {
                    const offSet = evt.nativeEvent.contentOffset.x;
                    const layout = evt.nativeEvent.layoutMeasurement.width;
                    const index = offSet / layout;

                    drawerHandler(index);
                }}
            >
                {/* Introdução a categoria */}
                <IntroductionC data={title} width={width} />

                <StagePages width={width} item={data} />

            </ScrollView>
        </SafeAreaView>
    );
};

export default Phase;
