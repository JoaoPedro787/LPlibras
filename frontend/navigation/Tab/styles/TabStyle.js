import { isTablet } from "../../../utils/utils";
import Colors from "../../../styles/colors";

export default TabHeaderStyle = {
    tabBarLabel: () => null,
    tabBarStyle: {
      position: 'absolute',
      marginLeft: '5%', 
      backgroundColor: Colors.Orange,
      borderRadius: 30,
      bottom: 15,
      height: isTablet ? 90 : 60,
      width: '90%',
      alignSelf: 'center',
    },
    tabBarActiveTintColor: Colors.LightBlue,
    tabBarInactiveTintColor: "#FFF",
  };