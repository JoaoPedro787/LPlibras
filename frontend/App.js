import React from 'react';
//Navigators
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

//Font Roboto
import { FontProvider } from './styles/fonts';

const App = () => {
  return (
    <FontProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FontProvider>
  );
};

export default App;