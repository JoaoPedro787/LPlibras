import React from "react-native";
import { View, useWindowDimensions } from "react-native";
import { MainIntro } from "./main";

const QuizIntroduction = ({ item }) => {
    const { width } = useWindowDimensions();
    const { text, image } = item;

    return (
        <>
            <View style={{ width: width}}>
                <MainIntro text={text} image={image} />
            </View>
        </>
    )

}

export { QuizIntroduction };