import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/CartScreen/CartScreen';
import VerifyLocation from '../screens/Location/Location';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RestaurantDetail from '../screens/RestaurantDetail/RestaurantDetail';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';

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
