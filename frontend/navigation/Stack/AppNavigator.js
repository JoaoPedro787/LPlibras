import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//telas
import StartMenu from "../../screens/StartMenu/StartMenu"
import SignUp from '../../screens/SignUpLogin/SignUp';
import Login from '../../screens/SignUpLogin/Login';
import ProfilePictureSelection from '../../screens/ProfilePictureSelection/ProfilePictureSelection';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PhaseDrawer from '../PhaseDrawer/drawerNavigation';
import Game from '../../screens/Game/Game';
import Quiz from '../../screens/Game/quiz/quiz';
import Con from '../../screens/Congralutations/Con';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartMenu">
      <Stack.Screen name="StartMenu"
        component={StartMenu}
        options={{ headerShown: false }} />

      <Stack.Screen
        name="Criar conta"
        component={SignUp}>
      </Stack.Screen>

      <Stack.Screen
        name="Login"
        component={Login}>
      </Stack.Screen>

      <Stack.Screen
        name="Seleção de foto de perfil"
        component={ProfilePictureSelection}
        options={{ headerShown: false }}>
      </Stack.Screen>

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}>
      </Stack.Screen>

      <Stack.Screen
        name="Phase"
        component={PhaseDrawer}
        options={{ headerShown: false }}>
      </Stack.Screen>

      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerShown: false }}>
      </Stack.Screen>

      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}>
      </Stack.Screen>

      <Stack.Screen
        name="Con"
        component={Con}
        options={{ headerShown: false }}>
      </Stack.Screen>

    </Stack.Navigator>
  );
};

export default AppNavigator;