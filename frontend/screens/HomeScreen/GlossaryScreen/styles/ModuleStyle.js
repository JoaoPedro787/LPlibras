import { StyleSheet } from "react-native";
import Texts from "../../../../src/components/texts";
import { isTablet } from "../../../../utils/utils";
import Colors from "../../../../styles/colors";

const Styles = StyleSheet.create({
    imgText: {
        ...(isTablet ? Texts.f50 : Texts.f24),
        color: "#FFF",
        textAlign: "center",
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

    img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
});

export default Styles;