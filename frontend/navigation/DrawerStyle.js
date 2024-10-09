import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { isTablet } from '../utils/utils';
import Colors from '../styles/colors';
import Texts from '../src/components/texts';

// Icons
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const size = isTablet ? 70 : 40;

const modules = [
  { name: 'MÓDULO I', route: 'MODÚLO I' },
  { name: 'MÓDULO II', route: 'MODÚLO II' },
];

const CustomDrawerContent = (props) => {
  const activeRoute = props.state.routeNames[props.state.index];

  return (
    <View style={styles.drawerContainer}>
      <Text style={[styles.text, { alignSelf: "flex-start" }]}>
        Módulos
      </Text>

      {/* Mapeia os módulos para gerar os botões dinamicamente */}
      {modules.map((module, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.ModuleContainer,
            activeRoute === module.route ? styles.activeModule : styles.inactiveModule
          ]}
          onPress={() => props.navigation.navigate(module.route)}
        >
          <Text style={styles.text}>
            {module.name}
          </Text>
        </TouchableOpacity>
      ))}
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
  return (
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
    ...isTablet ? Texts.f36Regular : Texts.f24Regular,
  },
  ModuleContainer: {
    width: "100%",
    height: isTablet ? 70 : 50,
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

export { CustomDrawerContent, CustomHeaderStyle }