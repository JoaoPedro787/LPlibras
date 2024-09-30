import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { isTablet } from "../../../../utils/utils";
// Styles
import Styles from "../ModuleStyle";
import Containers from "../../../../src/components/container";

//Icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "../../../../styles/colors";

const size = isTablet ? 50:25;
const Module1G = () => {
    return (
        // Cor
        <View style={[Containers.ContainerBgHome, { paddingHorizontal: 20 }]}>
            <ScrollView
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

                <View style={Styles.cardContainer}>
                    <View style={Styles.cardWrapper}>
                        {/* Implementar função para pegar vídeo do banco */}
                        <Image
                            style={Styles.img}
                            source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                        />
                    </View>

                    <View style={Styles.cardWrapper}>
                        {/* Implementar função para salvar no favorito */}
                        <TouchableOpacity style={Styles.starPosition}>
                            <AntDesign name="star" size={size} color={Colors.Blue} />
                        </TouchableOpacity>

                        <View style={Styles.imgContainer}>
                            {/* Implementar função para pegar imagem do banco */}
                            <Image
                                style={Styles.img}
                                source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                            />
                        </View>

                        <View style={Styles.imgTextContainer}>
                            {/* Implementar função para pegar nome do banco */}
                            <Text style={Styles.imgText}>Abacaxi</Text>
                        </View>
                    </View>
                </View>

                <View style={Styles.cardContainer}>
                    <View style={Styles.cardWrapper}>
                        <Image
                            style={Styles.img}
                            source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                        />
                    </View>

                    <View style={Styles.cardWrapper}>
                        <TouchableOpacity style={Styles.starPosition}>
                            <AntDesign name="star" size={size} color={Colors.Blue} />
                        </TouchableOpacity>

                        <View style={Styles.imgContainer}>
                            <Image
                                style={Styles.img}
                                source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                            />
                        </View>

                        <View style={Styles.imgTextContainer}>
                            <Text style={Styles.imgText}>Abacaxi</Text>
                        </View>
                    </View>
                </View>

                <View style={Styles.cardContainer}>
                    <View style={Styles.cardWrapper}>
                        <Image
                            style={Styles.img}
                            source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                        />
                    </View>

                    <View style={Styles.cardWrapper}>
                        <TouchableOpacity style={Styles.starPosition}>
                            <AntDesign name="star" size={size} color={Colors.Blue} />
                        </TouchableOpacity>

                        <View style={Styles.imgContainer}>
                            <Image
                                style={Styles.img}
                                source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                            />
                        </View>

                        <View style={Styles.imgTextContainer}>
                            <Text style={Styles.imgText}>Abacaxi</Text>
                        </View>
                    </View>
                </View>

                <View style={Styles.cardContainer}>
                    <View style={Styles.cardWrapper}>
                        <Image
                            style={Styles.img}
                            source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                        />
                    </View>

                    <View style={Styles.cardWrapper}>
                        <TouchableOpacity style={Styles.starPosition}>
                            <AntDesign name="star" size={size} color={Colors.Blue} />
                        </TouchableOpacity>

                        <View style={Styles.imgContainer}>
                            <Image
                                style={Styles.img}
                                source={require("../../../../assets/images/start_menu/sign-language-japanese.gif")}
                            />
                        </View>

                        <View style={Styles.imgTextContainer}>
                            <Text style={Styles.imgText}>Abacaxi</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Module1G;