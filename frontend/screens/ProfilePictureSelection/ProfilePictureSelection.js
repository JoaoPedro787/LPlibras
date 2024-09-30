import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { isTablet } from "../../utils/utils";
import { getImage } from "./profileC";

// Styles
import Colors from "../../styles/colors";
import Styles from "./ProfilePictureSelectionStyle";
import Buttons from "../../src/components/buttons";
import { ReadyTexts } from "../../src/components/texts";

// Classes
import Input from "./inputC";
import Profile from "./profileC";

// Icons
import AntDesign from "@expo/vector-icons/AntDesign";

// Api
import { getUser, updateUser } from "../../services/userService";

// Async
import { getUserId } from "../../utils/AsyncStorageFunctions";

const ProfilePictureSelection = ({ navigation }) => {
    const [primaryProfile, setPrimaryProfile] = useState(getImage('ProfileBlue'));
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');

    const ProfileSwap = (profile) => {
        setPrimaryProfile(getImage(profile));
    };

    useEffect(() => {
        const dataFetch = async () => {
            const id = await getUserId();
            return getUser(id)
                .then((response) => {
                    setData(response);
                    setLoading(false);
                })
                .catch((err) => console.log(err));
        }
        dataFetch()
    }, [])

    return (
        <LinearGradient style={{ flex: 1 }} colors={Colors.Gradient}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {loading
                        ? (
                            <ActivityIndicator size="large" color="#fff" style={{ flex: 1 }} />
                        ) : (
                            <>
                                <View style={Styles.mainContainer}>
                                    <TouchableOpacity
                                        style={{ alignSelf: "flex-start", padding: 30 }}
                                        onPress={() => navigation.goBack()}
                                    >
                                        <AntDesign name="arrowleft" size={isTablet ? 60 : 40} color={"#FFF"} />
                                    </TouchableOpacity>

                                    <View style={Styles.largeProfileContainer}>
                                        <Image source={primaryProfile} style={Styles.profileImage} />
                                    </View>
                                    
                                    {data.map((el)=>{
                                        const newArray = [el.s_nome_usuario, el.s_email_usuario, el.s_senha_usuario]
                                        return newArray.map((el,i)=>(
                                            <Input placeholder={el} key={i} icon={'edit'} />
                                        ))
                                    })}

                                    <Text style={Styles.selectionTitle}>Ícones</Text>
                                </View>

                                <View style={Styles.profileSelectionContainer}>
                                    {["ProfilePink", "ProfileOrange", "ProfileCyan", "ProfileLightGreen", "ProfilePurple", "ProfileDarkGreen"].map((profileName) => (
                                        <Profile key={profileName} imgName={profileName} onPress={ProfileSwap} />
                                    ))}
                                    <TouchableOpacity
                                        style={Buttons.OrangeButton}
                                        onPress={() => navigation.navigate("HomeScreen")}
                                    >
                                        <Text style={ReadyTexts.buttonTextWhite}>CONCLUÍDO</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default ProfilePictureSelection;
