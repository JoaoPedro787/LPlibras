import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../../../styles/colors";
import Styles from "../styles/moduleStyle";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default class ModuloC extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;

        return (
            // View para o nome do modulo
            <View style={Styles.moduleContainer}>
                <Text style={Styles.progressText}>
                    {item.nome_modulo}
                </Text>

                {/* Iterando sobre cada elemento */}
                {item.categorias.map((el) => {
                    const statusText = el.status_categoria != null ? `${el.status_categoria}%` : null;

                    return (
                        <View style={Styles.taskContainer} key={el.id_categoria}>
                            <View style={Styles.taskImageContainer}>
                                {/* Se tiver barra de progresso, renderiza imagem */}
                                {statusText ? (
                                    <Image
                                        source={require('../../../../assets/images/homescreen/lessons/alimento.png')}
                                        style={Styles.imgStyle}
                                    />
                                ) : (
                                    <View style={Styles.imgStyle}>
                                        <MaterialIcons name="lock-outline" size={50} color='gray' />
                                    </View>
                                )}

                                <Text style={Styles.TaskText}>
                                    {el.nome_categoria}
                                </Text>
                            </View>

                            <View style={Styles.statusContainer}>
                                <View style={Styles.progressBarContainer}>
                                    {/* Se tiver barra de progresso, renderiza porcentagem */}
                                    {statusText ? (
                                        <Text
                                            style={[Styles.TaskText, { alignSelf: 'center', position: "absolute", zIndex: 1 }]}
                                        >
                                            {statusText}
                                        </Text>
                                    ) : (
                                        <MaterialIcons name="lock-outline" size={28} color='gray' style={{ alignSelf: 'center' }} />
                                    )}

                                    <LinearGradient
                                        colors={Colors.ProgressBar}
                                        style={[Styles.progressBarFill, statusText ? { width: `${el.status_categoria}%` } : { width: 0 }]}
                                    />
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}