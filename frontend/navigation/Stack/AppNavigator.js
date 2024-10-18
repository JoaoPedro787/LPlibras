import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//telas
import StartMenu from "../../screens/StartMenu/StartMenu"
import SignUp from '../../screens/SignUpLogin/SignUp';
import Login from '../../screens/SignUpLogin/Login';
import ProfilePictureSelection from '../../screens/ProfilePictureSelection/ProfilePictureSelection';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PhaseDrawer from '../PhaseDrawer/drawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartMenu">
      <Stack.Screen name="StartMenu" 
      component={StartMenu} 
      options={{ headerShown: false }}/>
      
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
      options={{ headerShown: false }}>
        {(props)=>(<PhaseDrawer {...props}/>)}
      </Stack.Screen>
      
    </Stack.Navigator>
  );
};

export default AppNavigator;