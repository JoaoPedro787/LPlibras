import React, {useContext} from "react";
import {Image, View } from "react-native";
import {Button} from '../Game/layouts/button';
import { useNavigation } from "@react-navigation/native";
import {ProgressContext} from '../../contexts/progressBarContext';

const Con = ()=>{
    const {updateProgress} = useContext(ProgressContext)
    const navigation = useNavigation();

    const HandlePress = ()=>{
        updateProgress(25);
        return navigation.navigate('Perfil');
    }
    return(
        <View style={{flex:1, paddingBottom:10}}>
            <Image
            resizeMode="contain"
            style={{width:'100%',flex:1}}
            source={require('../../assets/images/end/end.png')}
            />
            <Button onPress={HandlePress}/>
        </View>
    )
};

export default Con;