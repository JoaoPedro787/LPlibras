import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView,
    ActivityIndicator,
    Alert,
} from "react-native";
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
    const [primaryProfile, setPrimaryProfile] = useState("");

    const [loading, setLoading] = useState(true);
    const [isEdit, setEdit] = useState(false);

    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);

    const profiles = [
        "ProfilePink",
        "ProfileOrange",
        "ProfileCyan",
        "ProfileLightGreen",
        "ProfilePurple",
        "ProfileBlue",
    ];

    // Função de mudar de perfil
    const ProfileSwap = (profile) => {
        setEdit(true);

        setNewData((prev) => {
            const newArray = [...prev];
            const item = newArray.find((el) => el.key === "s_fotoPerfil_usuario");
            item.value = profile;
            return newArray;
        });
        setPrimaryProfile(getImage(profile));
    };

    // Pegando dados
    useEffect(() => {
        const dataFetch = async () => {
            const id = await getUserId();

            return getUser(id)
                .then((response) => {
                    setData(response);
                })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false));
        };

        dataFetch();
    }, []);

    //Criando um novo array de objetos, mais fácil para manipulação
    useEffect(() => {
        if (data.length > 0) {
            setPrimaryProfile(getImage(data[0].s_fotoPerfil_usuario));
            setNewData(
                data
                    .flatMap((el) => Object.entries(el))
                    .map(([key, value], i) => ({ id: i, key: key, value: value }))
            );
        }
    }, [data]);

    // Digitos
    const handleDigit = (text, i) => {
        setEdit(true);
        return setNewData((prev) => {
            const newArray = [...prev];
            const item = newArray.find((el) => el.id === i);
            item.value = text;
            return newArray;
        });
    };

    // Funçao botao
    const handleButton = async () => {
        const id = await getUserId();
        const items = newData.map((el) => el.value);
        updateUser(id, {
            nome: items[0],
            email: items[1],
            senha: items[2],
            fotoPerfil: items[3],
        })
            .then((response) => {
                Alert.alert("Sucesso", response.message);
            })
            .catch((err) => Alert.alert("Erro", err.message));
        return navigation.navigate("HomeScreen");
    };

    return (
        <LinearGradient style={{ flex: 1 }} colors={Colors.Gradient}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#fff" style={{ flex: 1 }} />
                    ) : (
                        <>
                            <View style={Styles.mainContainer}>
                                <TouchableOpacity
                                    style={{ alignSelf: "flex-start", padding: 30 }}
                                    onPress={() => navigation.goBack()}
                                >
                                    <AntDesign
                                        name="arrowleft"
                                        size={isTablet ? 60 : 40}
                                        color={"#FFF"}
                                    />
                                </TouchableOpacity>

                                <View style={Styles.largeProfileContainer}>
                                    <Image source={primaryProfile} style={Styles.profileImage} />
                                </View>

                                {newData.map((el) => {
                                    if (el.id === 3) {
                                        return null;
                                    }
                                    return (
                                        <Input
                                            key={el.id}
                                            value={el.value}
                                            handleDigit={handleDigit}
                                            indice={el.id}
                                        />
                                    );
                                })}

                                <Text style={Styles.selectionTitle}>Ícones</Text>
                            </View>

                            <View style={Styles.profileSelectionContainer}>
                                {profiles.map((profileName, i) => (
                                    <Profile key={i} imgName={profileName} onPress={ProfileSwap} />
                                ))}
                                <TouchableOpacity
                                    style={Buttons.OrangeButton}
                                    onPress={() => {
                                        if (isEdit) {
                                            Alert.alert(
                                                'Confirme',
                                                'Você confirma que deseja atualizar os seus dados pessoais?',
                                                [
                                                    {
                                                        text: 'Cancelar',
                                                        onPress: () => navigation.navigate("HomeScreen")
                                                    },

                                                    {
                                                        text: 'Confirmar',
                                                        onPress: () => handleButton()
                                                    }
                                                ]
                                            );
                                        } else {
                                            return navigation.navigate("HomeScreen");
                                        }


                                    }}
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