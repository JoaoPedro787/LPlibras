import { StyleSheet,} from "react-native";
import Colors from "../../styles/colors.js";
import { isTablet } from "../../utils/utils.js";

const ButtonBase = StyleSheet.create({
    base: {
        width: '80%',
        maxWidth:400,
        padding: isTablet ? 22.5 : 12,
        borderRadius: isTablet ? 30 : 20,
        alignItems: 'center',
    }
});

const Buttons = StyleSheet.create({
    OrangeButton: {
        ...ButtonBase.base,
        backgroundColor: Colors.Orange,
    },
    WhiteButtonWithShadow: {
        ...ButtonBase.base,
        flexDirection:'row',
        justifyContent:"space-evenly",
        backgroundColor: '#FFF',
        elevation: isTablet ? 20 : 10, // Para Android
        shadowColor: '#000', // Para iOS
        shadowOffset: { width: 0, height: isTablet ? 4 : 2, }, // Para iOS
        shadowOpacity: isTablet ? 0.3 : 0.25, // Para iOS
        shadowRadius: isTablet ? 5 : 3.84, // Para iOS
    },
    WhiteButton: {
        ...ButtonBase.base,
        flexDirection:'row',
        justifyContent:"space-evenly",
        backgroundColor: '#FFF',
    },
    BlueButton: {
        ...ButtonBase.base,
        backgroundColor: Colors.Blue,
    },

});

export default Buttons;
