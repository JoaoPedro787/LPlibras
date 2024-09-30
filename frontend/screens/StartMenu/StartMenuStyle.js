import { StyleSheet} from "react-native";
import Texts from "../../src/components/texts";
import { isTablet } from "../../utils/utils.js";

const Styles = StyleSheet.create({
    title:{
        ... (isTablet ? Texts.f80 : Texts.f50),
        color:"#FFF"

    },
    subtitle:{
        ... (isTablet ? Texts.f24 : Texts.f20),
        color:"#FFF"

    },
    containerImg: {
        width: '90%',
        height: '90%',
        borderRadius: 20,
        overflow: 'hidden',
        maxWidth: 600,
        maxHeight: 600, 
    }
    
});

export default Styles;