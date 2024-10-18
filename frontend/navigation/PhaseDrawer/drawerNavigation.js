import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Phase from '../../screens/Phases/Phase';

const Drawer = createDrawerNavigator();

const PhaseDrawer = (props) => {
    const [showDrawer, setDrawer] = useState(false);

    const drawerHandler = () => {
        setDrawer(true);
    };

    const { route } = props;

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="PhaseContent" options={{ headerShown: showDrawer ? true : false }}>
                {() => (<Phase route={route} drawerHandler={drawerHandler} />)}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

// Colocar o data aqui, o conteudo sera renderizado pela drawer

export default PhaseDrawer;