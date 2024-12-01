import React, { useState, useRef, useEffect } from "react";
import { FlatList, View } from "react-native";
import { QuizData } from "./quizData";
import { Button } from "../layouts/button";
import { QuizMain } from "./main";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../styles/colors";

const Quiz = () => {
    const navigation = useNavigation();
    const [actualIndex, setIndex] = useState(0);
    const [isCorrectAnswer, setCorrectAnswer] = useState(false);
    const [buttonEffect, setBtnEffect] = useState(undefined);
    const [buttonId, setId] = useState(null);
    const flatListRef = useRef(null);

    const correctObj = { setCorrectAnswer, buttonId, setId, isCorrectAnswer, buttonEffect };

    const scrollToCurrentIndex = async () => {
        if (flatListRef.current) {
            if (buttonId === isCorrectAnswer) {
                // tela de parabéns
                if(actualIndex === QuizData.length -1){
                    return navigation.navigate('Con');
                }
                setIndex((prev) => prev + 1);
                setBtnEffect(true);
            } else {
                setIndex(0);
                setBtnEffect(false);
            }
        }
    };

    useEffect(() => {
        if (buttonEffect !== undefined) {
            const buttonColor = async () => {
                return await new Promise((resolve) => {
                    setTimeout(() => {
                        if (buttonEffect || !buttonEffect) {
                            flatListRef.current.scrollToIndex({ index: actualIndex, animated: true });
                        }
            
                        setBtnEffect(undefined);
                        setId(null);

                        resolve();
                    }, 1000);
                });
            }

            buttonColor();

        }
    }, [buttonEffect]);



    return (
        <>
            <View style={{ flex: 1, backgroundColor: Colors.Blue, paddingBottom: 10 }}>
                <FlatList
                    data={QuizData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    ref={flatListRef}
                    keyExtractor={(_item, index) => index}
                    renderItem={({ item }) => <QuizMain item={item} obj={correctObj} />}
                    style={{ flex: 1 }}
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
    )
};

export default Quiz;