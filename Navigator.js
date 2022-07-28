import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import SignUpScreen from './screens/SignUpScreen';
import CartScreen from './screens/CartScreen';
import RestaurantDetail from './screens/RestaurantDetail';
import VerifyLocation from './screens/Location';

import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
