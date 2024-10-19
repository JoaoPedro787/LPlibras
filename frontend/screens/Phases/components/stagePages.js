import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../../styles/colors";
import { Styles } from "../styles/stagePagesStyle";

import { getImages } from "../../HomeScreen/GlossaryScreen/src/getImages";

const StagePages = ({ width, item }) => {
    return (
        <View style={{ width, backgroundColor: Colors.Blue }}>
            <View
                style={{ height: 70, flexDirection: 'row', borderBottomWidth: 0.5, padding: 10, justifyContent: 'space-between', paddingHorizontal: 20 }}>

                <View style={{ borderRadius: 999, aspectRatio: 1, overflow: 'hidden' }}>
                    <Image
                        resizeMode="cover"
                        style={{ width: '100%', height: '100%' }}
                        source={getImages['frutas']}
                    />
                </View>

                <Text style={Styles.title}>
                    {item.nome_sub}
                </Text>

            </View>

            <View
                style={{ flex: 1, padding: 20, gap: 20 }}>
                {item.fases.map((el) => (
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        key={el.id}
                    >
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            resizeMode="contain"
                            source={el.tipo === 1 ? require('../../../assets/images/phases/phases_category/introducao.png') : require('../../../assets/images/phases/phases_category/1_star.png')}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export { StagePages };