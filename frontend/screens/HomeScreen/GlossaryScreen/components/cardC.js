import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// Fun
import { isTablet } from "../../../../utils/utils";

//Styles
import Styles from "../styles/ModuleStyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from "../../../../styles/colors";

// Images
import { getImages } from "../../../../utils/getGlossaryImages";

const CardC = ({ item, onPress, checked }) => {

    const path = item.s_nome_glossario;

    return (
        <View style={Styles.cardContainer}>
            <View style={Styles.cardWrapper}>
                {/* Video do banco...Falta gravar */}
                <Image
                    style={Styles.img}
                    source={require('../../../../assets/images/start_menu/sign-language-japanese.gif')}
                />
            </View>

            <View style={Styles.cardWrapper}>
                {/* Implementar função para salvar no favorito */}
                <TouchableOpacity style={Styles.starPosition}
                    onPress={() => onPress(path)}>
                    {
                        checked.includes(path)
                            ?
                            <AntDesign name="star" size={isTablet ? 50 : 25} color={Colors.Blue} />
                            :
                            <AntDesign name="staro" size={isTablet ? 50 : 25} color={Colors.Blue} />
                    }
                </TouchableOpacity>

                <View style={Styles.imgContainer}>
                    {/* Imagem do banco */}
                    <Image
                        style={Styles.img}
                        source={getImages[path]}
                    />
                </View>

                <View style={Styles.imgTextContainer}>
                    {/* Nome do banco */}
                    <Text style={[Styles.imgText, { textTransform: 'capitalize' }]}>
                        {path}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default CardC;