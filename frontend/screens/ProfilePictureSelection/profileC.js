import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";

// Styles
import Styles from "./ProfilePictureSelectionStyle";

// Função para mapear as imagens
const getImage = (image) => {
    switch (image) {
        case "ProfilePink":
            return require("../../assets/images/profiles/ProfilePink.png");
        case "ProfileOrange":
            return require("../../assets/images/profiles/ProfileOrange.png");
        case "ProfileCyan":
            return require("../../assets/images/profiles/ProfileCyan.png");
        case "ProfileLightGreen":
            return require("../../assets/images/profiles/ProfileLightGreen.png");
        case "ProfileBlue":
            return require("../../assets/images/profiles/ProfileBlue.png");
        case "ProfilePurple":
            return require("../../assets/images/profiles/ProfilePurple.png");
    }
};

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { imgName, onPress } = this.props;

        const ButtonPress = () => {
            onPress(imgName);
        }

        return (
            <View style={Styles.profileWrapper}>
                <TouchableOpacity
                    onPress={ButtonPress}
                    style={Styles.smallProfileContainer}
                >
                    <Image
                        source={getImage(imgName)}
                        style={Styles.profileImage}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
export { getImage };