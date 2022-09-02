import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {connect} from 'react-redux';
import OrderItem from '../../components/restaurantDetail/OrderItems';

const CartScreen = props => {
  // const {items, restaurantName} = useSelector(
  //   state => state.cartReducer.selectedItems,
  // );

  // console.log(items);
  // console.log(restaurantName)

  const items = props.info;
  console.log(items, 'items');
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.1}}>
        <Text
          style={{fontFamily: 'DM Sans', fontSize: 20, textAlign: 'center'}}>
          Your cart is ready to go
        </Text>

        <FlatList
          data={items}
          renderItem={({item, index}) => {
            console.log(item, 'item');
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

const mapStateToProps = state => {
  console.log('state@$%#####3333333333333333333', state);
  return {info: state.cart.selectedItems.items};
};
export default connect(mapStateToProps)(CartScreen);
