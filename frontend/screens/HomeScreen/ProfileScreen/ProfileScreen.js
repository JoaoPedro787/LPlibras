import React, { useContext } from "react";
import { View, SafeAreaView, ActivityIndicator, FlatList } from "react-native";

// Styles
import Colors from "../../../styles/colors";

// Classes
import ModuloC from "./components/moduloC";
import ProfileSection from "./components/profileSectionC";

// Context
import { UserInfoContext } from "../../../contexts/userInfoContext";

const ProfileScreen = () => {
  const { profilePath, isLoading, progressData, userInfo } = useContext(UserInfoContext);

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
          <ProfileSection item={userInfo} profile={profilePath} />

          {/* Status do progresso do usuário */}
          <View style={{ flex: 1 }}>
            <FlatList
              data={progressData}
              showsVerticalScrollIndicator={false}
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