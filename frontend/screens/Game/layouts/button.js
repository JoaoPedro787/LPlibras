import React from "react-native"
import { TouchableOpacity, Text } from "react-native";
import Buttons from '../../../src/components/buttons'
import texts from '../../../src/components/texts'

const Button = ({onPress}) => {
    return (
        <TouchableOpacity
            style={[Buttons.OrangeButton, {alignSelf:'center'}]}
            onPress={()=>onPress()}>
            <Text style={[texts.f32, {color:'white'}]}>
                AVANÇAR
            </Text>
        </TouchableOpacity>
    )
}

export { Button };