import React from "react";
import { View, Text, TouchableOpacity, Image,} from "react-native";
import Container from "../../src/components/container";
import Styles from "./StartMenuStyle";
import Colors from "../../styles/colors";
import Buttons from "../../src/components/buttons";
import { ReadyTexts } from "../../src/components/texts";


const StartMenu = ({navigation}) => {
    return (
        // Container principal, responsável pela cor de fundo
        <View style={Container.ContainerBgStart}>

            {/* Container flex, responsável por ocupar 1 flex da tela */}
            <View style={Container.ContainerFlex}>

                {/* Título com cor laranja */}
                <Text style={Styles.title}>
                    <Text style={{ color: Colors.Orange }}>LP</Text>LIBRAS
                </Text>

                {/* Título padrão */}
                <Text style={Styles.subtitle}>
                    Ensino de português pra surdos
                </Text>
            </View>

            {/* Container flex, responsável por ocupar 2 flex da tela */}
            <View style={[Container.ContainerFlex, { flex: 2}]}>
                
                {/* Container da imagem */}
                <View style={Styles.containerImg}>
                    <Image
                        source={require("../../assets/images/start_menu/sign-language-japanese.gif")}
                        style={{ width: "100%", height: "100%" }}
                    />
                </View>
            </View>

            {/* Container flex, responsável por ocupar 1 flex da tela */}
            <View style={[Container.ContainerFlex, { justifyContent: 'space-evenly' }]}>

                {/* Botão de criar conta */}
                <TouchableOpacity 
                style={Buttons.OrangeButton}
                onPress={()=>navigation.navigate("Criar conta")}>
                    <Text style={ReadyTexts.buttonTextWhite}>
                        CRIAR CONTA
                    </Text>
                </TouchableOpacity>

                {/* Botão de entrar */}
                <TouchableOpacity 
                style={Buttons.WhiteButton}
                onPress={()=>navigation.navigate("Login")}>
                    <Text style={ReadyTexts.buttonTextOrange}>
                        JÁ TENHO UMA CONTA
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default StartMenu;
