import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-magnus';
import Main from './screens/Main';
import Profile from './screens/Profile';
import Repos from './screens/Repos';
import Animation from './screens/Animation';

const { Navigator, Screen } = createNativeStackNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Animation"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.theme.colors.gray900,
          },
          headerTintColor: '#fff',
        }}>
        <Screen name="Animation" component={Animation} />
        <Screen name="Main" component={Main} />
        <Screen name="Profile" component={Profile} />
        <Screen name="Repos" component={Repos} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
