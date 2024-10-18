import React, { useState, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';

//Classes
import { IntroductionC } from './components/IntroductionC';
import { StagePages } from './components/stagePages';

// Hooks
import { FetchData } from './hooks/fetchData';

//Styles
import Colors from '../../styles/colors';

const Phase = ({ route, drawerHandler }) => {
    // Largura da tela
    const { width } = useWindowDimensions();

    // Pegando dados da rota
    const { title, id } = route.params;

    //State
    const [currentIndex, setIndex] = useState(0);

    // data
    const { isLoading, data } = FetchData(id);

    useEffect(() => {
        if (currentIndex === 1) {
            drawerHandler();
        }
    }, [currentIndex])

    return (
        <SafeAreaView
            style={{ flex: 1 }}>
            {isLoading
                ?
                <ActivityIndicator
                    size={'large'}
                    style={{ flex: 1 }}
                    color={Colors.Blue}
                />
                :
                <ScrollView
                    style={{ flex: 1 }}
                    scrollEnabled={(currentIndex === 1 ? false : true)}
                    pagingEnabled
                    horizontal={true}
                    onMomentumScrollEnd={(evt) => {
                        const offSet = evt.nativeEvent.contentOffset.x;
                        const layout = evt.nativeEvent.layoutMeasurement.width;

                        setIndex(offSet / layout);
                    }}
                >
                    {/* Introdução a categoria */}
                    <IntroductionC data={title} width={width} />

                    <StagePages width={width} data={data} />

                </ScrollView>
            }

        </SafeAreaView>
    )
};

export default Phase;