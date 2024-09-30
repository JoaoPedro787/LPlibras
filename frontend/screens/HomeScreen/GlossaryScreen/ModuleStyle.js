import { StyleSheet } from "react-native";
import Texts from "../../../src/components/texts";
import { isTablet } from "../../../utils/utils";
import Colors from "../../../styles/colors";

const Styles = StyleSheet.create({
    // Text Styles
    title: {
        ...(isTablet ? Texts.f50 : Texts.f28),
        color: "#FFF",
    },
    favoriteText: {
        ...(isTablet ? Texts.f32 : Texts.f18),
        color: Colors.Blue,
    },
    imgText: {
        ...(isTablet ? Texts.f50 : Texts.f28),
        color: "#FFF",
        textAlign: "center",
    },

    // Container Styles
    headerContainer: {
        marginTop:20,
        flexDirection: 'row',
        width: "100%",
        height: isTablet ? 90 : 50,
    },
    favoriteWrapper: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.LightGray,
        borderRadius: isTablet ? 40 : 20,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    cardContainer: {
        width: '100%',
        height: isTablet ? 350 : 200,
        flexDirection: 'row',
        paddingHorizontal: isTablet ? 50 : undefined,
        gap: isTablet ? 30 : 15,
    },
    cardWrapper: {
        flex: 1,
        borderRadius: 20,
        overflow: "hidden",
    },
    imgContainer: {
        flex: 2,
    },
    starPosition: {
        position: "absolute",
        zIndex: 1,
        alignSelf: "flex-end",
        padding: 10,
    },
    imgTextContainer: {
        flex: 1,
        backgroundColor: Colors.Orange,
        alignItems: "center",
        justifyContent: "center",
    },

    // Image Styles
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});

export default Styles;