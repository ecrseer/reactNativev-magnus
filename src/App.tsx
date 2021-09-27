import React, { useEffect } from 'react';
import { StatusBar, ThemeProvider } from 'react-native-magnus';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

import Routes from './Routes';
import light from './styles/themes/light';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={light}>
      <StatusBar barStyle="dark-content" />
      <Routes />
      <Toast ref={ref => Toast.setRef(ref)} />
    </ThemeProvider>
  );
};

export default App;
