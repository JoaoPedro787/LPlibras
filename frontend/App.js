import React from 'react';
// Navigators
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/Stack/AppNavigator';

// Provider
import { FontProvider } from './styles/fonts';
import ProgressProvider from './contexts/progressBarContext';

const App = () => {
  return (
    <FontProvider>
      <ProgressProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ProgressProvider>
    </FontProvider>
  );
};

export default App;