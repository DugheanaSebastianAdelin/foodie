import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';

import OrderItem from '../../components/orderItem/OrderItem';
import {images} from '../../core/constants/images';

const CartScreen = ({cart}) => {
  const [totalCartValue, setTotalCartValue] = useState(0);
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const cartData = cart.selectedItems.items;

  const renderItem = () => {
    return (
      <View style={{flex: 0.8}}>
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <View>
                <OrderItem key={index} name={item.name} price={item.price} />
              </View>
            );
          }}
        />
      </View>
    );
  };

  const prices = cartData
    .map(item => item.price)
    .reduce((actual, current) => actual + current, 0);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={{flex: 1}}
        imageStyle={{opacity: 0.1}}>
        <TouchableOpacity onPress={goBack} style={{marginTop: 5}}>
          <Image source={images.backButton}></Image>
        </TouchableOpacity>
        <Text
          style={{fontFamily: 'DM Sans', fontSize: 20, textAlign: 'center'}}>
          Your cart is ready to go
        </Text>
        {renderItem()}
        <Text>Total price : {prices} $</Text>
        <Text>Delivery details</Text>
        <Text> address</Text>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    displayName: state.auth.userProfile,
    email: state.auth.email,
    uuid: state.auth.userToken,
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxSignOut: () =>
      dispatch({
        type: 'LOGOUT_SAGA',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
