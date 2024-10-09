import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import { isTablet } from "../../../utils/utils";
// Styles
import Styles from "./styles/GlossaryStyle";
import Containers from "../../../src/components/container";

//Icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "../../../styles/colors";

// FetchData
import { getGlossaryData } from "./hooks/glossaryData";
import CardHook from "./hooks/cardHook";

//Class
import CardC from "./components/cardC";
import ModalC from "./components/modalC";

const size = isTablet ? 50 : 25;
const ModuleG = ({ route }) => {
    // Params do módulo
    const moduloID = route.params.modulo;

    // Hook dos dados
    const { loading, data } = getGlossaryData(moduloID);

    // Mostrar modal
    const [showModal, setModal] = useState(false);

    // Hooks do card
    const { checked, updateFavorite } = CardHook();

    {/* Fechar modal */ }
    const handleClose = (modalValue) => {
        return setModal(!modalValue);
    };

    return (
        // Cor
        <SafeAreaView style={[Containers.ContainerBgHome, { paddingHorizontal: 20, paddingBottom: 85 }]}>

            {loading
                ?
                <ActivityIndicator
                    size={'large'}
                    style={{ flex: 1 }}
                    color={Colors.Blue}
                />
                :
                <View
                    style={{ flex: 1, width: "100%" }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, gap: 40 }}
                >
                    {/* Header */}
                    <View style={Styles.headerContainer}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={Styles.title}>Glossário</Text>
                        </View>

                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => setModal(true)}>

                            <View style={Styles.favoriteWrapper}>
                                {/* Função para ver favoritos */}
                                <FontAwesome name="sort-desc" size={size} color="gray" />
                                <Text style={Styles.favoriteText}>Favoritos</Text>
                                <AntDesign name="star" size={size} color={Colors.Blue} />

                            </View>
                        </TouchableOpacity>

                        {/* Ao pressionar para ver os favoritos, abre a modal */}
                        <ModalC modalValue={showModal} handleClose={handleClose} data={checked} />

                    </View>

                    {/* Lista de elementos */}
                    <FlatList
                        data={data}
                        contentContainerStyle={{ gap: 30 }}
                        keyExtractor={(el) => el.i_id_glossario}
                        renderItem={(item) => <CardC item={item.item} onPress={updateFavorite} checked={checked} />}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            }

        </SafeAreaView>
    );
};

export default ModuleG;