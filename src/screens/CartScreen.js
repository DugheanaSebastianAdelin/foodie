import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import OrderItem from '../components/restaurantDetail/OrderItems';


const CartScreen = () => {
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  

  console.log(items);
  // console.log(restaurantName)
  return (
    <View>
      <ImageBackground
        source={require('../img/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.1}}>
        <Text
          style={{fontFamily: 'DM Sans', fontSize: 20, textAlign: 'center'}}>
          Your shopping cart
        </Text>
   
      
        <FlatList
            data={items}
            renderItem={({item,index}) => {
        
              return (
                <View>
                
                <OrderItem key={index} item={item} />
                </View>
              );
            }}
         
          />
          <Text>Delivery details</Text>
          <Text> address</Text>

        
  
 

      </ImageBackground>
    </View>
  );
};

export default CartScreen;
