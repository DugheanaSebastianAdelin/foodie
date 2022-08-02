import {
  createNativeStackNavigator,
  createSwitchNavigator,
} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import CartScreen from './src/screens/CartScreen';
import RestaurantDetail from './src/screens/RestaurantDetail';
import VerifyLocation from './src/screens/Location';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="Location" component={VerifyLocation} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />

        <Stack.Screen name="Cart" component={CartScreen} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
