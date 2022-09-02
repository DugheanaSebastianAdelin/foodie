import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import data from '../../../assets/mockData/restaurants';
const RestaurantDetail = props => {
  const win = Dimensions.get('window');

  const addToCart = (
    id2,
    title,
    ingredients,
    price,
    checkboxValue,
    img,
    category,
  ) => {
    props.reduxAddToCart(
      id2,
      title,
      ingredients,
      price,
      checkboxValue,
      img,
      category,
    );
  };

  const route = useRoute();
  const {id} = route.params;

  let restaurant = data.restaurants.filter(city => city.id == id);

  const restaurantDetails = restaurant[0];

  const location = restaurantDetails.location;
  const restaurantName = restaurantDetails.title;
  const cuisine = restaurantDetails.cuisine;
  const priceRange = restaurantDetails.price_range;
  const adress = restaurantDetails.address;
  const phone = restaurantDetails.phone;
  const email = restaurantDetails.email;
  const website = restaurantDetails.website;

  const cartItems = props.itemId;
  useEffect(() => {
    console.log(cartItems, 'cart itemssssssssssssssssssssssss');
  });

  const isFoodInCart = (food, cartItems) => {
    return cartItems.find(item => item.id == food.id) ? true : false;
  };
  console.log(restaurant, 'menu');

  return (
    <View style={{flex: 1}}>
      <Image
        style={{width: '100%', height: '22%', flex: 0.3}}
        source={require('../../../assets/img/restaurant1.png')}
      />

      <Text
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        style={{
          fontFamily: 'DM Sans',
          fontSize: 27,
          lineHeight: 40,
          color: '#241C1C',
          paddingLeft: 10,
        }}>
        {restaurantName}
      </Text>
      <ScrollView style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={{marginLeft: 10, marginRight: 10, flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../../assets/img/location.png')}
              />
              <Text style={styles.colorRed}>{location}</Text>
            </View>
            <Image
              style={{width: 68, height: 12}}
              source={require('../../../assets/img/ratings.png')}
            />
          </View>
          <View style={{margin: 5}}>
            <View style={{marginBottom: 10}}>
              <View style={styles.rowSpaceBetwin}>
                <Text style={styles.lightGrey}>Cuisine</Text>
                <Text style={styles.colorRed}>{cuisine}</Text>
              </View>
              <View style={styles.rowSpaceBetwin}>
                <Text style={styles.lightGrey}>Price range</Text>
                <Text style={styles.colorRed}>{priceRange}</Text>
              </View>
              <View style={styles.rowSpaceBetwin}>
                <Text style={styles.lightGrey}>Foodie Ranks</Text>
                <Text style={styles.colorRed}>#2 of 250</Text>
              </View>
            </View>

            <Text
              style={{
                color: '#FBB816',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 20,
              }}>
              Adress
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'blue',
              }}>
              <Text numberOfLines={3} style={{flex: 3}}>
                {adress}
              </Text>
              <Image
                style={{height: 88.55, width: 92, borderRadius: 15}}
                source={require('../../../assets/img/restaurant1.png')}
              />
            </View>
            <View style={{margin: 5, marginTop: 15, marginBottom: 15}}>
              <View style={styles.rowSpaceBetwin}>
                <Text style={styles.lightGrey}>Phone</Text>
                <Text style={styles.colorRed}>{phone}</Text>
              </View>
              <View style={styles.rowSpaceBetwin}>
                <Text style={styles.lightGrey}>Email</Text>
                <Text style={styles.colorRed}>{email}</Text>
              </View>
              <View style={styles.rowSpaceBetwin}>
                <Text style={styles.lightGrey}>Website</Text>
                <Text style={styles.colorRed}>{website}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text style={styles.colorRed}>Menu</Text>
            <Text style={{color: '#FBB816'}}>See all</Text>
          </View>

          {restaurant.map(item =>
            item.menu.combos.map((item2, index) => (
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
                      {item2.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 8.57,
                        color: '#979797',
                        fontWeight: '400',
                        fontFamily: 'DM Sans',
                      }}>
                      {item2.ingredients}
                    </Text>
                    <Text>{item2.index}</Text>
                  </View>
                  <View style={{flexGrow: 1, flexShrink: 0, flexBasis: 0}}>
                    <Text>{item2.price} $</Text>
                    <TouchableOpacity>
                      <BouncyCheckbox
                        iconStyle={{borderColor: 'red'}}
                        isChecked={isFoodInCart(item2, cartItems)}
                        onPress={checkboxValue => {
                          addToCart(
                            item2.id,
                            item2.title,
                            item2.price,
                            item2.ingredients,
                            checkboxValue,
                            item2.img,
                            item2.category,
                          );
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )),
          )}

          <Text>Drinks</Text>
          {restaurant.map(item =>
            item.menu.drinks.map((item2, index) => (
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
                      {item2.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 8.57,
                        color: '#979797',
                        fontWeight: '400',
                        fontFamily: 'DM Sans',
                      }}>
                      {item2.ingredients}
                    </Text>
                    <Text>{item2.index}</Text>
                  </View>
                  <View style={{flexGrow: 1, flexShrink: 0, flexBasis: 0}}>
                    <Text>{item2.price} $</Text>
                    <TouchableOpacity>
                      <BouncyCheckbox
                        iconStyle={{borderColor: 'red'}}
                        isChecked={isFoodInCart(item2, cartItems)}
                        onPress={checkboxValue => {
                          addToCart(
                            item2.id,
                            item2.title,
                            item2.price,
                            item2.ingredients,
                            checkboxValue,
                            item2.img,
                            item2.category,
                          );
                          console.log(checkboxValue, 'checkbox valueeeeeeeeee');
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )),
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  console.log('state@$%#####22222222222333333333333333', state);
  return {itemId: state.cart.selectedItems.items};
};

const mapDispatchToProps = dispatch => {
  return {
    reduxAddToCart: (
      id2,
      title,
      price,
      ingredients,
      checkboxValue,
      img,
      category,
    ) =>
      dispatch({
        type: 'ADD_TO_CART_SAGA',
        payload: {
          checkboxValue: checkboxValue,
          id: id2,
          title: title,
          price: price,
          ingredients: ingredients,
          img: img,
          category: category,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);

const styles = StyleSheet.create({
  rowSpaceBetwin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  secondView2: {
    top: 15,
  },
  viewTextMap: {
    height: 20,
  },
  colorRed: {
    color: '#FD4D05',
    fontFamily: 'DM Sans',
    fontSize: 16.9,
    lineHeight: 20.33,
    fontWeight: '400',
  },
  lightGrey: {
    color: '#979797',
    fontFamily: 'DM Sans',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
});
