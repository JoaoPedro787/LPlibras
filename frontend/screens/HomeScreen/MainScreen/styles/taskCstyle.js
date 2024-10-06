import { StyleSheet } from "react-native";
import Texts from "../../../../src/components/texts";
import { isTablet } from "../../../../utils/utils";
import Colors from "../../../../styles/colors";

const Styles = StyleSheet.create({
    categoryContainer:{
        flex:1,
        gap:40,
        padding:25
    },

    title: {
        ...(isTablet ? Texts.f50 : Texts.f28),
        color: "black",
    },

    progressText:{
        alignSelf:'center',
        fontWeight:'bold',
        marginVertical:10,
        fontSize:20
    },
    
    categoryWrapper:{
        flex:1.2,
        backgroundColor:'#FFF'
    },

    TouchableContainer:{
        flex:1,
        backgroundColor:'#FFF',
        marginHorizontal:40
    },

    progressBarContainer: {
        backgroundColor: Colors.DarkGray,
        height: '20%',
        width: "100%",
    },

    progressBarFill: {
        height: "100%"
    },
});

export default Styles;