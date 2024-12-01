import React from "react-native";

// Styles
import { View, Image, Text } from "react-native";
import Texts from "../../../src/components/texts";

import { getImages } from '../../../utils/getGlossaryImages'

const MainIntro = ({ text }) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ width: '100%' }}
                        resizeMode="cover"
                        source={require('../../../assets/images/start_menu/sign-language-japanese.gif')}
                    />
                </View>

                <View style={{ height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <Text style={[Texts.f20, { color: 'white' }]}>
                    {text.toUpperCase()}
                    </Text>
                </View>

            </View>

            <View style={{ flex: 1 }}>

                <Image
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    source={getImages[text]}
                />
            </View>
        </>
    )
};

export { MainIntro };