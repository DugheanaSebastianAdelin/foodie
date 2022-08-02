import 'react-native-gesture-handler';
// import {createStackNavigator} from '@react-navigation-stack';
import Navigator from './Navigator';
import React from 'react';
import Store from './src/redux/store';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {Login_unlogged} from './Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {Home_logged} from './Navigator';


const App = () => {
  const logged = false;
  const store = configureStore();

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
