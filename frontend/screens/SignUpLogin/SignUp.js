import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from "react-native";
import Input from "./inputC.js";

// Styles
import Container from "../../src/components/container";
import Styles from "./SignUpLoginStyle";
import Inputs from "../../src/components/inputs";
import Buttons from "../../src/components/buttons";
import Texts, { ReadyTexts } from "../../src/components/texts";

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

//Api
import { newUser } from "../../services/userService.js";

//Async
import { storeUserId } from "../../utils/AsyncStorageFunctions.js";

const SignUp = ({ navigation }) => {
  const inputValues = ['Nome', 'Email', 'Senha'];
  // Estado para alternar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [inputs, setInputs] = useState(() => inputValues.map(() => ''));

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleDigit = (text, i) => {
    setInputs((prev) => {
      const newArray = [...prev];
      newArray[i] = text;
      return newArray;
    })
  }

  const handlePress = ()=>{
    const data = {nome:inputs[0],email:inputs[1],senha:inputs[2]};
    return result = newUser(data)
      .then(async(response)=>{
        await storeUserId(response.id.toString());
        Alert.alert('Sucesso',response.message)
        navigation.navigate('Seleção de foto de perfil')
      })
      .catch((err)=>Alert.alert('Erro',err.message));
  }

  return (
    <KeyboardAvoidingView
      style={Container.ContainerWhite}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      {/* Container principal */}
      <View style={Styles.containerMain}>
        {/* Título */}
        <Text style={Styles.title}>Crie sua conta</Text>

        {inputValues.map((el, i) => {
          if (el != 'Senha') {
            return <Input
              key={i}
              text={el}
              indice={i}
              value={inputs[i]}
              handleDigit={handleDigit}
            />
          } else {

            {/* Container para o input de senha */ }
            return <View style={Inputs.InputDarkGrayWithImage} key={i}>

              {/* Input de senha */}
              <Input
                text={el}
                indice={i}
                value={inputs[i]}
                passWord={isPasswordVisible}
                handleDigit={handleDigit}
              />

              {/* Botão para trocar a visualização da senha */}
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Ionicons
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>

          }

        })}

        {/* Botão de criar conta */}
        <TouchableOpacity
          style={Buttons.BlueButton}
          onPress={() => handlePress()}
        >
          <Text style={ReadyTexts.buttonTextWhite}>CRIAR CONTA</Text>
        </TouchableOpacity>

        {/* Container para a linha */}
        <View style={Styles.containerLine}>
          <View style={Styles.line} />
          <Text style={[Styles.textLine, { marginHorizontal: 10 }]}>Ou</Text>
          <View style={Styles.line} />
        </View>

        {/* Botão Google, implementar API */}
        <TouchableOpacity style={Buttons.WhiteButtonWithShadow}>
          <Image
            source={require("../../assets/images/login_signUp/google.png")}
            style={Styles.img}
            resizeMode="contain"
          />
          <Text style={ReadyTexts.buttonTextBlue}>Google</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;