import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {connect, useDispatch} from 'react-redux';
function Menu(props) {
  // function Menu({item, restaurantName}) {
  const {title, ingredients, price} = item;

  const dispatch = useDispatch();
  // const selectItem = (item, checkboxValue) =>
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: {
  //       ...item,
  //       restaurantName: restaurantName,
  //       checkboxValue: checkboxValue,
  //     },
  //   });

  // const cartItems = useSelector(state => state.cartReducer.selectedItems.items);
  // console.log(cartItems);

  const addToCart = () => {
   console.log( props.reduxAddToCart());
  };
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));
  return (
    <View style={{paddingTop: 5}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          borderRadius: 16,
          maxHeight: 65,
        }}>
        <View
          style={{
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: 70,
            marginRight: 15,
          }}>
          <Image
            source={require('../../../assets/img/restaurant1.png')}
            style={{height: 64, width: 75, borderRadius: 16}}
          />
        </View>
        <View style={{flexGrow: 0, flexShrink: 1, flexBasis: 250}}>
          <Text
            style={{
              fontSize: 13.44,
              color: '#241C1C',
              fontWeight: '400',
              fontFamily: 'DM Sans',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 8.57,
              color: '#979797',
              fontWeight: '400',
              fontFamily: 'DM Sans',
            }}>
            {ingredients}
          </Text>
        </View>
        <View style={{flexGrow: 1, flexShrink: 0, flexBasis: 0}}>
          <Text>{price} $</Text>
          <TouchableOpacity>
            <BouncyCheckbox
              iconStyle={{borderColor: 'red'}}
              // isChecked={isFoodInCart(item, cartItems)}
              onPress={checkboxValue => {
                addToCart();
                // selectItem(item, checkboxValue);
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    reduxAddToCart: () =>
      dispatch({
        type: 'ADD_TO_CART_SAGA',
        payload: {
          ...item,
          restaurantName: restaurantName,
          checkboxValue: checkboxValue,
        },
      }),
  };
};

export default connect(mapDispatchToProps)(Menu);
