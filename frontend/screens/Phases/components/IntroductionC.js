import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';

import { IntroductionImages } from '../utils/getIntroductionImages';
import Texts from '../../../src/components/texts';


const IntroductionC = ({ data, width }) => {
    return (
        <ImageBackground
            style={{ width, backgroundColor: 'black' }}
            imageStyle={{ opacity: 0.35 }}
            source={IntroductionImages[data]}
        >
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: '95%', height: 'auto', aspectRatio: 1, borderRadius: 20 }}
                    source={IntroductionImages[data]}
                />
                <Text style={[Texts.f50, { color: '#FFF', textTransform: 'uppercase' }]}>
                    {data}
                </Text>
            </View>

        </ImageBackground>
    )
};

export { IntroductionC };