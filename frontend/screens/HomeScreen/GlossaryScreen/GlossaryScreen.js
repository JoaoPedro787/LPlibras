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

//Class
import CardC from "./components/cardC";

const size = isTablet ? 50 : 25;
const ModuleG = ({ route }) => {
    const moduloID = route.params.modulo
    const { loading, data } = getGlossaryData(moduloID);

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

                        <View style={{ flex: 1 }}>
                            <View style={Styles.favoriteWrapper}>

                                {/* Implementar função para ver os favoritos */}
                                <TouchableOpacity>
                                    <FontAwesome name="sort-desc" size={size} color="gray" />
                                </TouchableOpacity>

                                <Text style={Styles.favoriteText}>Favoritos</Text>
                                <AntDesign name="star" size={size} color={Colors.Blue} />
                            </View>
                        </View>
                    </View>

                    {/* Lista de elementos */}
                    <FlatList
                        data={data}
                        contentContainerStyle={{ gap: 30 }}
                        keyExtractor={(el) => el.i_id_glossario}
                        renderItem={(item) => <CardC item={item.item} />}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            }

        </SafeAreaView>
    );
};

export default ModuleG;