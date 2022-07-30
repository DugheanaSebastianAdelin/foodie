import 'react-native-gesture-handler';
// import {createStackNavigator} from '@react-navigation-stack';
import Navigator from './Navigator';
import React from 'react';
import Store from './src/redux/store';

import {Provider} from 'react-redux';
import configureStore from './src/redux/store';

const App = () => {
  const store =configureStore()

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
