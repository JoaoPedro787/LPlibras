import { StyleSheet } from "react-native";
import Colors from "../../../../styles/colors";
import Texts from "../../../../src/components/texts";
import { isTablet } from "../../../../utils/utils";

const Styles = StyleSheet.create({
    ProgressContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        rowGap: 10
    },
    progressText: {
        ...(isTablet ? Texts.f32 : Texts.f24),
        color: 'gray',
    },
    TaskText: {
        ...(isTablet ? Texts.f28 : Texts.f18),
        color: "#FFF"
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
    taskImageContainer: {
        flex: 1,
        height: 120,
        padding: 10,
        alignItems: "center"
    },
    statusContainer: {
        flex: 2,
        justifyContent: "center",
        marginEnd: 10
    },
    progressBarContainer: {
        backgroundColor: Colors.DarkGray,
        height: '25%',
        width: "100%",
    },
    progressBarFill: {
        height: "100%",
        width: '50%'
    },
    moduleContainer: {
        margin: 20,
        padding: 10,
        borderRadius: 20,
        backgroundColor: Colors.ModuleContainerColor,
        // Sombra para iOS
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.84, // Raio da sombra
        // Sombra para Android
        elevation: 5, // Altura da elevação
    },
    imgStyle: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.DarkGray,
        borderRadius: 20,
    }
})

export default Styles;