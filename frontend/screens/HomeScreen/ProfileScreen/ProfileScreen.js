import React from "react";
import { View, SafeAreaView, ActivityIndicator, FlatList } from "react-native";

// Styles
import Colors from "../../../styles/colors";

// Hooks
import useProfileData from './hooks/ProfileData';

// Classes
import ModuloC from "./components/moduloC";
import ProfileSection from "./components/profileSectionC";

const ProfileScreen = ({ navigation }) => {
  const { profilePath, isLoading, progressData, userInfo } = useProfileData();

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 90 }}>
      {isLoading ? (
        <ActivityIndicator
          size={'large'}
          color={Colors.Blue}
          style={{ flex: 1 }}
        />
      ) : (
        <View style={{ flex: 1 }}>
          {/* Seção do usuário */}
          <ProfileSection item={userInfo} profile={profilePath} navigation={navigation} />

          {/* Status do progresso do usuário */}
          <View style={{ flex: 1 }}>
            <FlatList
              data={progressData}
              renderItem={(item) => <ModuloC item={item.item} profile={profilePath} />}
              keyExtractor={(el) => el.id_modulo}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;