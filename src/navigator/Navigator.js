import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import VerifyLocation from '../components/Location/Location';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RestaurantDetail from '../screens/RestaurantDetail/RestaurantDetail';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import CartScreen from '../screens/CartScreen/CartScreen';

import {NavigationContainer} from '@react-navigation/native';
import BurgerMenuScreen from '../screens/BurgerMenu/BurgerMenuScreen';

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
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="BurgerMenu" component={BurgerMenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
