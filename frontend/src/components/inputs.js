import { StyleSheet} from "react-native";
import Colors from "../../styles/colors.js";
import Texts from "./texts";
import { isTablet } from "../../utils/utils.js";

const InputBase = StyleSheet.create({
    base:{
        ...(isTablet ? Texts.f24 : Texts.f20),
        width:'80%',
        maxWidth:500,
        height:isTablet ? 60 : 50,
        color:'gray',
        padding:isTablet ? 15 : 7.5,
        borderRadius:isTablet ? 20 : 15,
        alignItems:'flex-start',
        borderWidth:1,
        borderColor:'gray',
    },

});

const Inputs = StyleSheet.create({
    InputDarkGray:{
        ...InputBase.base,
        backgroundColor:Colors.DarkGray,
    },
    InputDarkGrayWithImage:{
        ...InputBase.base,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.DarkGray,
    },
    InputLightDarkGrayWithImage:{
        ...InputBase.base,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:Colors.LightGray,
    },

    InputText:{
        ...(isTablet ? Texts.f24 : Texts.f20),
        color:'gray'
    }
});

export default Inputs