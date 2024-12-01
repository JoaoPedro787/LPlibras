import React from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import texts from '../../../src/components/texts'
import Ionicons from '@expo/vector-icons/Ionicons';

const size = 30;

const Header = ({text,bgcolor}) => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems:'center', padding: 20, backgroundColor: bgcolor }}>

            <TouchableOpacity
            onPress={()=>navigation.goBack()}
            >
                <Ionicons name="close" size={size} />
            </TouchableOpacity>

            <Text style={texts.f20}>
                {text}
            </Text>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Game')}
            >
                <Ionicons name="reload" size={size} />
            </TouchableOpacity>
        </View>
    )

}

export { Header }