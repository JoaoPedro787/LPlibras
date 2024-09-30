// contexts/FontContext.js
import React, { createContext } from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <FontContext.Provider value={{ fontsLoaded }}>
      {fontsLoaded ? children : null}
    </FontContext.Provider>
  );
};
