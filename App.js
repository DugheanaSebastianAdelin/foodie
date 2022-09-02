import 'react-native-gesture-handler';
// import {createStackNavigator} from '@react-navigation-stack';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/navigator/Navigator';
import {store} from './src/redux/store/store';

import firebase from '@react-native-firebase/app';

// Your secondary Firebase project credentials...
const credentials = {
  apiKey: 'AIzaSyCCZSJC-Q9Lo-EonyxS19KViliNCrcR76I',
  authDomain: 'foodie-app-72359.firebaseapp.com',
  projectId: 'foodie-app-72359',
  storageBucket: 'foodie-app-72359.appspot.com',
  messagingSenderId: '771101847587',
  appId: '1:771101847587:web:973e50fb2a5f833e2a0196',
  databaseURL: '',
};

// await firebase.initializeApp(credentials);

const App = () => {
  const init = async () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(credentials);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
