import { StyleSheet } from "react-native";
import Texts from "../../src/components/texts";
import { Diameter, isTablet } from "../../utils/utils.js";

const ProfileRounded = StyleSheet.create({
    base: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center"
    }
});

const Styles = StyleSheet.create({
    selectionTitle: {
        ...isTablet ? Texts.f32 : Texts.f24,
        alignSelf: "flex-start",
        color: "#FFF",
        padding: 20,
    },
    mainContainer: {
        alignItems:'center',
        rowGap:20,
    },
    profileSelectionContainer: {
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 20,
        justifyContent: 'space-evenly',
        marginBottom:10,
    },
    profileWrapper: {
        width: '33.3%',
        height: 'auto',
        alignItems: 'center',
    },
    largeProfileContainer: {
        ...ProfileRounded.base,
        width: Diameter * (isTablet ? 0.35 : 0.45),
        height: Diameter * (isTablet ? 0.35 : 0.45),
        borderRadius: Diameter * (isTablet ? 0.35 : 0.45) / 2,
    },
    smallProfileContainer: {
        ...ProfileRounded.base,
        width: Diameter * (isTablet ? 0.225 : 0.275),
        height: Diameter * (isTablet ? 0.225 : 0.275),
        borderRadius: Diameter * (isTablet ? 0.2 : 0.275),
    },
    profileImage: {
        width: '120%',
        height: '120%'
    },
    inputField: {
        ...(isTablet ? Texts.f24 : Texts.f20),
        color: 'gray',
        flex:1
    },
});

export default Styles;