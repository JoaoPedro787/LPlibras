import React, { useEffect } from "react";
import { View, Text, useWindowDimensions, TouchableOpacity, Image } from "react-native";

//Styles
import Styles from "../styles/taskCstyle";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../styles/colors";

// ImagePath
import { imagesPath } from "../../globalUtils/getCategoryImages";

const TaskC = ({ item }) => {
    const { width } = useWindowDimensions();

    const haveStatus = item.status_categoria || 0;

    const titulo = item.nome_categoria;
    
    return (
        <View
            style={[Styles.categoryContainer, { width }]}>
            <View
                style={Styles.categoryWrapper}>

                {/* Imagem da categoria */}
                <View
                    style={{ flex: 1 }}>
                    <Image
                        source={imagesPath[titulo]}
                        resizeMode={'fill'}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                {/* Titúlo da categoria */}
                <View
                    style={{ flex: 1, padding: 15 }}>
                    <Text
                        style={Styles.title}>
                        {titulo.toUpperCase()}
                    </Text>

                    {/* Status da categoria por usuário */}
                    <Text
                        style={Styles.progressText}
                    >
                        {haveStatus}%

                    </Text>
                    <View
                        style={Styles.progressBarContainer}>

                        {/* Barra de progresso */}
                        <LinearGradient
                            style={[Styles.progressBarFill, { width: `${haveStatus}%` }]}
                            colors={Colors.ProgressBar}
                        />

                    </View>
                </View>

            </View>

            {/* Botão para escrever */}
            <TouchableOpacity
                style={Styles.TouchableContainer}
            >

                <Text
                    style={[Styles.title, { alignSelf: 'center' }]}>
                    ESCREVER
                </Text>

                <Image
                    source={require('../../../../assets/images/homescreen/mainScreen/ESCREVER.png')}
                    resizeMode={'contain'}
                    style={{ width: '100%', height: '100%' }}
                />

            </TouchableOpacity>
        </View>
    );
};

export default TaskC;
