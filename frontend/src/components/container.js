import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const baseContainer = StyleSheet.create({
    base:{
        flex:1,
        alignItems:'center',
    }
});

const Container = StyleSheet.create({
    ContainerBgStart:{
        ...baseContainer.base,
        backgroundColor:Colors.Blue
    },
    ContainerWhite:{
        ...baseContainer.base,
        backgroundColor:"#FFF"
    },
    ContainerBgHome:{
        ...baseContainer.base,
        backgroundColor:Colors.LightBlue
    },
    ContainerBgFase:{
        ...baseContainer.base,
        backgroundColor:Colors.DarkBlue
    },
    ContainerFlex:{
        ...baseContainer.base,
        width:"100%",
        justifyContent:"center",
    },
});

export default Container;