import React, { Component } from "react";

// Styles
import { TextInput } from "react-native";
import Inputs from "../../src/components/inputs";

export default class Input extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {text, passWord, handleDigit, value, indice} = this.props;

    return (
      <TextInput
        style={text !== 'Senha' ? Inputs.InputDarkGray : Inputs.InputText}
        placeholder={text}
        secureTextEntry={passWord}
        onChangeText={(text)=>handleDigit(text,indice)}
        value={value}
      />
    );
  }
}
