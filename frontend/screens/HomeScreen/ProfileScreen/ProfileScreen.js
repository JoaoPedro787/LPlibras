import React, { useState } from "react";
import { isTablet } from "../../../utils/utils";
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Styles
import Styles from "./ProfileScreenStyle";
import Colors from "../../../styles/colors";

// Icons
import AntDesign from '@expo/vector-icons/AntDesign';

const size = isTablet ? 50 : 30;

const ProfileScreen = ({ navigation }) => {
  // Estado para a porcentagem de progresso, implementar função para pegar a porcentagem no banco
  const [progress, setProgress] = useState(50); // Exemplo: 50%

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Container de perfil */}
      <View style={Styles.ProfileInfoContainer}>
        <LinearGradient
          style={{ flex: 1, width: '100%', height: '100%' }}
          colors={Colors.ProfileGradient}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Seleção de foto de perfil')}
            style={{ paddingTop: 35, alignSelf: "flex-end", marginRight: 15 }}
          >
            {/* Editar perfil, implementar função para mudar apenas do usuário */}
            <AntDesign name="edit" size={size} color={Colors.Orange} />
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
              {/* Imagem de perfil, implementar função para pegar do banco */}
              <Image
                source={require("../../../assets/images/profiles/ProfileBlue.png")}
                style={{ width: "120%", height: '120%' }}
              />
            </View>
          </View>
        </LinearGradient>

        {/* Nome, implementar função para pegar do banco */}
        <View style={{ height: 'auto', width: "100%", marginVertical: 10, paddingHorizontal: 20 }}>
          <Text style={Styles.nameText}>
            Nome
          </Text>

          {/* Email, implementar função para pegar do banco */}
          <Text style={Styles.emailText}>
            nome@gmail.com
          </Text>
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.ProgressContainer}
      >
        <Text style={Styles.progressText}>
          Progresso
        </Text>

        <View style={Styles.ModuleContainer}>
          <Text style={Styles.progressText}>
            Modúlo I
          </Text>

          <View style={Styles.taskContainer}>
            <View style={Styles.taskImageContainer}>
              <Image
                source={require("../../../assets/images/homescreen/lessons/alimento.png")}
                style={{ flex: 1, width: "100%", borderRadius: 20 }}
              />
              <Text style={Styles.TaskText}>
                Alimentos
              </Text>
            </View>

            <View style={Styles.statusContainer}>
              <View style={Styles.progressBarContainer}>
                <Text
                  style={[Styles.TaskText, { alignSelf: 'center', position: "absolute", zIndex: 1 }]}
                >
                  {progress}%
                </Text>
                <LinearGradient
                  colors={Colors.ProgressBar}
                  style={[Styles.progressBarFill, { width: `${progress}%` }]}
                />
              </View>
            </View>
          </View>

          {/* Apenas de teste */}
          <View style={Styles.taskContainer}>
            <View style={Styles.taskImageContainer}>
              <Image
                source={require("../../../assets/images/homescreen/lessons/alimento.png")}
                style={{ flex: 1, width: "100%", borderRadius: 20 }}
              />
              <Text style={Styles.TaskText}>
                Teste
              </Text>
            </View>

            <View style={Styles.statusContainer}>
              <View style={Styles.progressBarContainer}>
                <Text
                  style={[Styles.TaskText, { alignSelf: 'center', position: "absolute", zIndex: 1 }]}
                >
                  {progress}%
                </Text>
                <LinearGradient
                  colors={Colors.ProgressBar}
                  style={[Styles.progressBarFill, { width: `${progress}%` }]}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Apenas de teste */}
        <View style={Styles.ModuleContainer}>
          <Text style={Styles.progressText}>
            Modúlo II
          </Text>

          <View style={Styles.taskContainer}>
            {/* Conteúdo adicional aqui */}
          </View>

          <View style={Styles.taskContainer}>
            {/* Conteúdo adicional aqui */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;