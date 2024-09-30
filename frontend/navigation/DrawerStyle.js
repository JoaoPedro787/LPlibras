import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { isTablet } from '../utils/utils';
import Colors from '../styles/colors';
import Texts from '../src/components/texts';

// Icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const size = isTablet ? 70:40;

const CustomDrawerContent = (props) => {
    // Determine the active route
    const activeRoute = props.state.routeNames[props.state.index];
  
    return (
      <View style={styles.drawerContainer}>
        <Text style={[styles.text, { alignSelf: "flex-start" }]}>
          Módulos
        </Text>
        
        <TouchableOpacity
          style={[
            styles.ModuleContainer,
            activeRoute === 'MODÚLO I' ? styles.activeModule : styles.inactiveModule
          ]}
          onPress={() => props.navigation.navigate('MODÚLO I')}
        >
          <Text style={styles.text}>
            Módulo I
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={[
            styles.ModuleContainer,
            activeRoute === 'MODÚLO II' ? styles.activeModule : styles.inactiveModule
          ]}
          onPress={() => props.navigation.navigate('MODÚLO I')}
        >
          <Text style={styles.text}>
            Módulo II
          </Text>
        </TouchableOpacity>
  
      </View>
    );
};

const CustomHeaderStyle = {
    headerStyle: {
      backgroundColor: Colors.Orange,
      height: isTablet ? 110 : undefined,
    },
    headerTitle: '',
    headerTintColor: '#FFF',
    headerRight: () => <CustomDrawerHeader />,
};

const CustomDrawerHeader = () => {
    return(
        <View style={{ alignItems: 'center', marginRight: 30 }}>
            <TouchableOpacity>
              <FontAwesome5 name="user-circle" size={size} color="#FFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContainer: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      flex: 1,
      alignItems: "center",
      gap: 25,
    },
    text: {
      ...isTablet ? Texts.f36Regular:Texts.f24Regular,
    },
    ModuleContainer: {
      width: "100%",
      height: isTablet ? 70:50,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: 'center'
    },
    activeModule: {
      backgroundColor: Colors.Orange, 
    },
    inactiveModule: {
      backgroundColor: Colors.LightBlue, 
    }
  });

export {CustomDrawerContent,CustomHeaderStyle}