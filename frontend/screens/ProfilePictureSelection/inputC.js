import React, { Component } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";

// Styles
import Styles from "./ProfilePictureSelectionStyle";
import Inputs from "../../src/components/inputs";
import AntDesign from "@expo/vector-icons/AntDesign";

const size = 30;

export default class Input extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {icon} = this.props;

    return (
      <View style={Inputs.InputLightDarkGrayWithImage}>
        {/* Input de nome */}
        <TextInput style={Styles.inputField} placeholder={this.props.placeholder} />

        {/* Editar nome */}
        <TouchableOpacity>
          <AntDesign name={icon} size={size} color="gray" />
        </TouchableOpacity>
      </View>
    );
  }
}