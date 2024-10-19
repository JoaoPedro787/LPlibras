import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Phase from '../../screens/Phases/Phase';
import { FetchData } from './hooks/fetchData';
import Colors from '../../styles/colors';

const Drawer = createDrawerNavigator();

const PhaseDrawer = (props) => {
    const { id } = props.route.params;

    const [currentIndex, setIndex] = useState(0);

    const { isLoading, data } = FetchData(id);

    const drawerHandler = (index) => {
        setIndex(index);
    };

    const { route, navigation } = props;

    return (
        isLoading ? (
            <ActivityIndicator
                size={'large'}
                style={{ flex: 1 }}
                color={Colors.Blue}
            />
        ) : (
            <Drawer.Navigator
                defaultStatus="closed"
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.DarkBlue },
                    headerTintColor: 'white',
                    headerTitleAlign: 'center'
                }}
            >
                {data.subCategoria.map((item) => (
                    <Drawer.Screen
                        key={item.id_sub}
                        name={item.nome_sub}
                        options={{
                            headerShown: currentIndex > 0 ? true : false,
                            headerTitle: route.params.title,
                        }}
                    >
                        {() => (
                            <Phase
                                route={route}
                                drawerHandler={drawerHandler}
                                data={item}
                                currentIndex={currentIndex}
                            />
                        )}
                    </Drawer.Screen>
                ))}
            </Drawer.Navigator>
        )
    );
};

export default PhaseDrawer;
