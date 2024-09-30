import React from 'react';
//Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomHeaderStyle, CustomDrawerContent } from './DrawerStyle';

//Main Screen
import Module1M from '../screens/HomeScreen/MainScreen/Module1/Module1';
// Glossary Screen
import Module1G from '../screens/HomeScreen/GlossaryScreen/Module1/Module1';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ isGlossary }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={CustomHeaderStyle} // Usa os estilos importados
    >
      {isGlossary ? (
        <Drawer.Screen name="MODÚLO I" component={Module1G} />
      ) : (
        <Drawer.Screen name="MODÚLO I" component={Module1M} />
      )}
      {/* Adicione mais telas se necessário */}
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;