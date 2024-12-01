import React, { useState, useRef } from 'react';
import Colors from '../../styles/colors';
import { FlatList, View } from 'react-native';

// Layouts
import { QuizIntroduction } from './introduction/intro';
import { GameVideoData } from './introduction/videoData';
import { Button } from './layouts/button';
import { Header } from "./layouts/header";
import { useNavigation } from '@react-navigation/native';

const Game = () => {
    const [actualIndex, setIndex] = useState(1);
    const flatListRef = useRef(null);
    const navigation = useNavigation();

    const scrollToCurrentIndex = () => {
        if (actualIndex === GameVideoData.length) {
            return navigation.navigate('Quiz');
        }
        if (flatListRef.current) {
            setIndex(actualIndex + 1);
            flatListRef.current.scrollToIndex({ index: actualIndex, animated: true });
        };

    };

    return (
        <>
            <View style={{flex:1, paddingBottom:10, backgroundColor:'white'}}>
                <Header text={'Introdução'} bgcolor={Colors.Blue} />
                <FlatList
                    ref={flatListRef}
                    data={GameVideoData}
                    style={{ flex: 1 }}
                    renderItem={({ item }) => <QuizIntroduction item={item} />}
                    keyExtractor={(_item, index) => index.toString()}
                    horizontal
                    scrollToIndex={actualIndex}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    onMomentumScrollEnd={(event) => {
                        const index = Math.floor(
                            event.nativeEvent.contentOffset.x /
                            event.nativeEvent.layoutMeasurement.width
                        );
                        setIndex(index);
                    }}
                />
                <Button onPress={scrollToCurrentIndex} />
            </View>
        </>
    );
};

export default Game;