import React, { Component } from "react";
import { View } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';

import Colors from "../../../../styles/colors";

export default class PaginatorC extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, currentIndex } = this.props;
        return (
            <View
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                {data.map((_item, index) => (
                    <Entypo name="dot-single" size={50} color={currentIndex === index ? Colors.Orange : 'black'} key={index} />
                ))}

            </View>
        );
    };
};