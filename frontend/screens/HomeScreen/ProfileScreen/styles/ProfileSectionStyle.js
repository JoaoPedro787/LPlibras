import { StyleSheet } from "react-native";
import Colors from "../../../../styles/colors"
import Texts from "../../../../src/components/texts"
import { isTablet } from "../../../../utils/utils";

const Styles = StyleSheet.create({
    ProfileInfoContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFF",
        borderBottomWidth: 4,
        borderColor: 'gray'
    },
    nome_usuario: {
        ...(isTablet ? Texts.f36 : Texts.f28),
        color: Colors.Orange
    },
    email_usuario: {
        ...(isTablet ? Texts.f32 : Texts.f24),
        color: Colors.Orange,
        textDecorationLine:'underline'
    }
})

export default Styles