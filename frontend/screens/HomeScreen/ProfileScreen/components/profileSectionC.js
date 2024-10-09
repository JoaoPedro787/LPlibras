import React from "react";
import { isTablet } from "../../../../utils/utils";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';


// Styles
import Styles from "../styles/ProfileSectionStyle";
import Colors from "../../../../styles/colors";

// Icons
import AntDesign from '@expo/vector-icons/AntDesign';

const images = (image) => {
    switch (image) {
        case "ProfilePink":
            return require("../../../../assets/images/profiles/ProfilePink.png");
        case "ProfileOrange":
            return require("../../../../assets/images/profiles/ProfileOrange.png");
        case "ProfileCyan":
            return require("../../../../assets/images/profiles/ProfileCyan.png");
        case "ProfileLightGreen":
            return require("../../../../assets/images/profiles/ProfileLightGreen.png");
        case "ProfileBlue":
            return require("../../../../assets/images/profiles/ProfileBlue.png");
        case "ProfilePurple":
            return require("../../../../assets/images/profiles/ProfilePurple.png");
    }
};

const ProfileSection = ({ item, profile }) => {
    const navigation = useNavigation();

    return (
        <View style={Styles.ProfileInfoContainer}>
            <ImageBackground
                source={require('../../../../assets/images/global/bgImage.png')}
                style={{ flex: 1, width: '100%', height: '100%' }}>

                <LinearGradient
                    style={{ flex: 1, width: '100%', height: '100%' }}
                    colors={Colors.ProfileGradient}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Seleção de foto de perfil')}
                        style={{ paddingTop: 35, alignSelf: "flex-end", marginRight: 15 }}
                    >
                        {/* Editar perfil */}
                        <AntDesign name="edit" size={isTablet ? 50 : 30} color={Colors.Orange} />
                    </TouchableOpacity>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                width: '80%',
                                height: '80%',
                                aspectRatio: 1,
                                borderRadius: 9999,
                                overflow: 'hidden',
                                backgroundColor: '#FFF',
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* Imagem de perfil  */}
                            <Image
                                source={images(profile)}
                                style={{ width: "120%", height: '120%' }}
                            />
                        </View>
                    </View>
                </LinearGradient>

            </ImageBackground>

            {/* Informações sobre o usuario */}
            <View style={{ height: 'auto', width: "100%", marginVertical: 10, paddingHorizontal: 20 }}>
                {item.map((el) => (
                    <Text style={Styles[el.key]} key={el.key}>
                        {el.value}
                    </Text>
                ))}
            </View>
        </View>
    );
};

export default ProfileSection;