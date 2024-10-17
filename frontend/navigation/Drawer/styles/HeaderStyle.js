import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Colors from "../../../styles/colors";
import { isTablet } from "../../../utils/utils";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { DropDownC } from "../components/DropDownMenuC";



// Exportando
const CustomHeaderStyle = {
    headerStyle: {
        backgroundColor: Colors.Orange,
        height: isTablet ? 110 : undefined,
    },
    headerTitle: '',
    headerTintColor: '#FFF',
    headerRight: () => <CustomDrawerHeader />,
};


// Main
const CustomDrawerHeader = () => {
    const [showModal, setModal] = useState(false);
    const [top, setTop] = useState(0);

    const data = [
        { label: 'Sair' },
        { label: 'Teste' },
    ];
    
    const getCorrectlyView = (evt) => {
        const layout = evt.nativeEvent.layout;
        const top = layout.y;
        const height = layout.height;

        return setTop(top + height);
    };

    const closeModal = (modal) => {
        setModal(!modal);
    }

    return (
        <View style={{ alignItems: 'center', marginRight: 30 }}>
            <TouchableOpacity
                onPress={() => closeModal(showModal)}>

                <FontAwesome5 name="user-circle" size={isTablet ? 70 : 40} color="#FFF" onLayout={getCorrectlyView} />

                <DropDownC data={data} modalVisibility={showModal} style={top} closeModal={closeModal} />

            </TouchableOpacity>
        </View>
    );
};

export { CustomHeaderStyle };