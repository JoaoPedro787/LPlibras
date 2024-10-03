import React, { Component } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";

// Styles
import Styles from "./ProfilePictureSelectionStyle";
import Inputs from "../../src/components/inputs";
import AntDesign from "@expo/vector-icons/AntDesign";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditable: false
    }
  }
  render() {
    const { value, handleDigit, indice } = this.props;
    const { isEditable } = this.state;

    return (
      <View style={Inputs.InputLightDarkGrayWithImage}>
        {/* Input de nome */}
        <TextInput 
        style={Styles.inputField} 
        value={value} 
        editable={isEditable} 
        onChangeText={(text) => handleDigit(text, indice)} />

        {/* Editar nome */}
        <TouchableOpacity
          onPress={() => this.setState(() => ({ isEditable: true }))}>
          <AntDesign name={'edit'} size={30} color="gray" />
        </TouchableOpacity>
      </View>
    );
  }
}