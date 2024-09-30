import { StyleSheet} from "react-native";
import Texts from "../../src/components/texts"
import Container from "../../src/components/container";
import { isTablet } from "../../utils/utils.js";

const Styles = StyleSheet.create({
    containerMain:{
        ...Container.ContainerFlex,
        justifyContent:'space-evenly',
    },
    title:{
        ... (isTablet ? Texts.f36 : Texts.f24)
    },
    textLine:{
        ... (isTablet ? Texts.f32:Texts.f24),
        color:'gray'
    },
    containerLine:{
        flexDirection:'row',
        alignItems:'center',
        width:isTablet ? 600:'100%'
    },
    line: {
        flex:1,
        height: 2,
        backgroundColor: 'gray',
        marginHorizontal: 10,
    },
    img:{
        width:50,
        height:50
    },
});

export default Styles