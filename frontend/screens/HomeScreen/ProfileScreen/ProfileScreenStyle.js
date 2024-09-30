import { StyleSheet } from "react-native";
import Colors from "../../../styles/colors"
import Texts from "../../../src/components/texts"
import { isTablet } from "../../../utils/utils";

const Styles = StyleSheet.create({
    ProfileInfoContainer:{
        flex:1,
        alignItems:'center',
        backgroundColor:"#FFF",
        borderBottomWidth:4,
        borderColor:'gray'
    },
    ProgressContainer:{
        flexGrow:1,
        paddingHorizontal:20,
        rowGap:10
    },
    nameText:{
        ...(isTablet ? Texts.f36:Texts.f28),
        color:Colors.Orange
    },
    emailText:{
        ...(isTablet ? Texts.f32:Texts.f24),
        color:Colors.Orange
    },
    progressText:{
        ...(isTablet ? Texts.f32:Texts.f24),
        color:'gray',
    },
    TaskText:{
        ...(isTablet ? Texts.f28:Texts.f18),
        color:"#FFF"
    },
    ModuleContainer: {
        width:'100%',
        height: isTablet ? 500:350,
        marginBottom:20,
        rowGap:15,
        backgroundColor: Colors.ModuleContainerColor,
        borderRadius: 20,
        paddingHorizontal:20,
        // Sombra para iOS
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        // Sombra para Android
        elevation: 5, // Altura da elevação
    },
    taskContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: Colors.LightBlue,
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
        flexDirection: "row",
        // Sombra para iOS
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        // Sombra para Android
        elevation: 5, // Altura da elevação
    },
    
    taskImageContainer:{
        flex:1,
        padding:10,
        alignItems:"center"
    },
    statusContainer:{
        flex:2,
        justifyContent:"center",
        marginEnd:10
        
    },
    progressBarContainer:{
        backgroundColor:'darkgray',
        height:'25%',
        width:"100%",
    },
    progressBarFill:{
        height:"100%",
        width:'50%'
    },

})

export default Styles