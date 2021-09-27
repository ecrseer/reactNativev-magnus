/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ThemeProvider, Text, Div } from 'react-native-magnus';
import Toast from 'react-native-toast-message';
import THEMES from './constants/themes';
import ThemeSwitcher from './components/ThemeSwitcher';

const App:React.FC = () => {
  
  return (
    <ThemeProvider theme={THEMES.light}>
      <Div bg="body" flex={1} px="lg">
        <Text mt="2xl" pt="xl" fontSize="5xl" color="text" fontWeight="bold">
          onfigss
        </Text>
        <Div row mt="md">
          <Div flex={1}>
            <Text color="text">Night Mode</Text>
          </Div>
          <Div>
            <ThemeSwitcher />
          </Div>

      <Toast ref={ref => Toast.setRef(ref)} > <Text color="text">Night Mode</Text></Toast>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default App;
