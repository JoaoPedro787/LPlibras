import React from "react";
import { useWindowDimensions, View, Image, TouchableOpacity, Text } from "react-native";
import { Header } from "../layouts/header";
import Colors from "../../../styles/colors";
import Texts from "../../../src/components/texts";
import { getImages } from '../../../utils/getGlossaryImages';

const QuizMain = ({ item, obj }) => {
    const { width } = useWindowDimensions();
    const { setCorrectAnswer, buttonId, setId, buttonEffect } = obj;

    return (
        <View style={{ width }}>
            <Header text={item.header} bgcolor={Colors.Orange} />

            <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden', margin: 15 }}>
                <Image
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%' }}
                    source={item.header === 'QUAL SINAL?' ? getImages[item.answer] : require('.././../../assets/images/start_menu/sign-language-japanese.gif')}
                />
            </View>

            <View style={{ flex: 1.2, flexDirection: 'row', flexWrap: 'wrap' }}>
                {item.list.map((el, i) => (
                    <TouchableOpacity
                        onPress={() => {
                            if (buttonEffect === undefined) {
                                setId(el.value);
                                setCorrectAnswer(item.answer);
                            }
                        }}
                        key={i}
                        style={{ flexBasis: '50%', height: '50%', paddingHorizontal: 15, paddingVertical: 10 }}
                    >
                        <View
                            style={[
                                {
                                    flex: 1,
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                },
                                el.value === buttonId && buttonEffect !== undefined
                                    ? { backgroundColor: buttonEffect ? '#9df19c' : '#af1b3b' }
                                    : el.value === buttonId
                                        ? { backgroundColor: 'orange' }
                                        : { backgroundColor: 'white' },
                            ]}
                        >
                            <Image
                                resizeMode="cover"
                                style={{ width: '100%', flex: 1 }}
                                source={item.header === 'QUAL SINAL?' ? require('.././../../assets/images/start_menu/sign-language-japanese.gif') : getImages[el.value]}
                            />
                            <Text style={Texts.f24}>
                                {el.value.toUpperCase()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export { QuizMain };