import React from 'react';
//Drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomHeaderStyle, CustomDrawerContent } from './DrawerStyle';

//Main Screen
import ModuleM from '../screens/HomeScreen/MainScreen/MainScreen';
// Glossary Screen
import ModuleG from '../screens/HomeScreen/GlossaryScreen/GlossaryScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ isGlossary }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={CustomHeaderStyle} // Usa os estilos importados
    >
      {isGlossary ? (
        <Drawer.Screen name="MODÚLO I" component={ModuleG} initialParams={{ modulo: 1 }} />

      ) : (
        <>
        <Drawer.Screen name="MODÚLO I" component={ModuleM} initialParams={{ modulo: 1 }} />
        <Drawer.Screen name="MODÚLO II" component={ModuleM} initialParams={{ modulo: 2 }} />
        </>
      )}

    </Drawer.Navigator>
  );
};
export default DrawerNavigation;