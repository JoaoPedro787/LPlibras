import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isTablet } from '../utils/utils';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome

// Style
import TabHeaderStyle from './TabStyle';

// Telas
import MainScreenNavigator from '../screens/HomeScreen/MainScreen/MainScreenNavigator';
import ProfileScreen from '../screens/HomeScreen/ProfileScreen/ProfileScreen';
import GlossaryNavigator from '../screens/HomeScreen/GlossaryScreen/GlossaryNavigator';


import { UserInfoProvider } from '../contexts/userInfoContext';


// Estilo para os ícones
const iconSize = isTablet ? 50 : 30;

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={TabHeaderStyle}>
      <Tab.Screen
        name="Perfil"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={iconSize} color={color} />
          ),
        }}>
        {() => (
          <UserInfoProvider>
            <ProfileScreen />
          </UserInfoProvider>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Inicio"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={iconSize} color={color} />
          ),
        }}>
        {() => (
          <UserInfoProvider>
            <MainScreenNavigator />
          </UserInfoProvider>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Glossário"
        component={GlossaryNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="book" size={iconSize} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;