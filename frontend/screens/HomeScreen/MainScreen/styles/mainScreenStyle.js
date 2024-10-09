import { StyleSheet } from "react-native";
import Texts from "../../../../src/components/texts";
import { isTablet } from "../../../../utils/utils";
import Colors from "../../../../styles/colors";

const Styles = StyleSheet.create({
    bgContainer:{
        flex:1,
        backgroundColor:Colors.LightBlue,
        paddingBottom:85
    },

    title: {
        ...(isTablet ? Texts.f50 : Texts.f28),
        color: "#FFF",
    },
    
    favoriteText: {
        ...(isTablet ? Texts.f32 : Texts.f18),
        color: Colors.Blue,
    },

    headerContainer: {
        marginTop:20,
        flexDirection: 'row',
        width: "100%",
        height: isTablet ? 90 : 50,
        marginBottom:15,
    },

    favoriteWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.LightGray,
        borderRadius: isTablet ? 40 : 20,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    
});

export default Styles;