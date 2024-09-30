import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { isTablet } from '../utils/utils';
import { FontAwesome } from '@expo/vector-icons'; // Importa FontAwesome

// Style
import TabHeaderStyle from './TabStyle';

// Telas
import MainScreen from '../screens/HomeScreen/MainScreen/MainScreen';
import ProfileScreen from '../screens/HomeScreen/ProfileScreen/ProfileScreen';
import GlossaryScreen from '../screens/HomeScreen/GlossaryScreen/GlossaryScreen';

// Estilo para os ícones
const iconSize = isTablet ? 50 : 30;

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={TabHeaderStyle}>
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={iconSize} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Início"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={iconSize} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Glossário"
        component={GlossaryScreen}
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