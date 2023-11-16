import React from 'react';
import StackController from './src/Controllers/StackController';
import {StatusBar, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  SplashScreen.hide();

  return (
    <>
      <StatusBar
        backgroundColor={'white'}
        barStyle="dark-content"
      />
      <StackController />
    </>
  );
};
export default App;
