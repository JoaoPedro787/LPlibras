import { StyleSheet} from "react-native";
import Colors from "../../styles/colors.js";
import { isTablet } from "../../utils/utils.js";

const BaseText = StyleSheet.create({
    text:{
        fontFamily:"Roboto_700Bold"
    }
});

const Texts = StyleSheet.create({
    f80:{
        ...BaseText.text,
        fontSize:80
    },
    f50:{
        ...BaseText.text,
        fontSize:50
    },
    f20:{
        ...BaseText.text,
        fontSize:20
    },
    f24:{
        ...BaseText.text,
        fontSize:24
    },
    f32:{
        ...BaseText.text,
        fontSize:32
    },
    f36:{
        ...BaseText.text,
        fontSize:36
    },
    f28:{
        ...BaseText.text,
        fontSize:28
    },
    f18:{
        ...BaseText.text,
        fontSize:18
    },
    f24Regular:{
        fontFamily:"Roboto_400Regular",
        fontSize:24
    },
    f36Regular:{
        fontFamily:"Roboto_400Regular",
        fontSize:36
    }
});

const ReadyTexts = StyleSheet.create({
    buttonTextWhite:{
        ...(isTablet ? Texts.f32:Texts.f24),
        color:"#FFF"
    },
    buttonTextOrange:{
        ...(isTablet ? Texts.f32:Texts.f24),
        color:Colors.Orange
    },
    buttonTextBlue:{
        ...(isTablet ? Texts.f32:Texts.f24),
        color:Colors.LightBlue
    }

})

export {ReadyTexts};
export default Texts;

