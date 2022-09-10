import {useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import data from '../../../assets/mockData/restaurants';
import {images} from '../../core/constants/images';
import styles from './restaurantDetailStyle';

const RestaurantDetail = props => {
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

  return (
    <View style={styles.mainView}>
      <Image style={styles.restaurantImage} source={images.restaurantImage} />

      <Text
        adjustsFontSizeToFit={true}
        numberOfLines={1}
        style={styles.restaurantName}>
        {restaurantName}
      </Text>
      <ScrollView>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={styles.secondPartOfScreen}>
          <View style={styles.rowSpaceBetwin}>
            <View style={styles.row}>
              <Image
                style={styles.locationImage}
                source={images.locationIcon}
              />
              <Text style={styles.colorRed}>{location}</Text>
            </View>
            <Image style={styles.ratings} source={images.ratings} />
          </View>
          <View style={styles.margin5}>
            <View style={styles.marginBottom}>
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

            <Text style={styles.adress}>Adress</Text>
            <View style={styles.rowSpaceBetwin}>
              <Text numberOfLines={3}>{adress}</Text>
              <Image
                style={styles.addressImage}
                source={images.restaurantImage}
              />
            </View>
            <View style={styles.phoneEmailWebsiteView}>
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
            <Text style={styles.seeAll}>See all</Text>
          </View>

          {restaurant.map(item =>
            item.menu.combos.map(item2 => (
              <View style={styles.menuView} key={item2.id}>
                <View style={styles.firstMenuView}>
                  <View style={styles.secondMenuView}>
                    <Image
                      source={images.restaurantImage}
                      style={styles.menuImage}
                    />
                  </View>
                  <View style={styles.titleView}>
                    <Text style={styles.itemTitle}>{item2.title}</Text>
                    <Text style={styles.itemIgredients}>
                      {item2.ingredients}
                    </Text>
                  </View>
                  <View style={styles.itemView}>
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
                </View>
              </View>
            )),
          )}

          <Text>Drinks</Text>
          {restaurant.map(item =>
            item.menu.drinks.map(item2 => (
              <View style={styles.menuView} key={item2.id}>
                <View style={styles.firstMenuView}>
                  <View style={styles.secondMenuView}>
                    <Image
                      source={images.restaurantImage}
                      style={styles.menuImage}
                    />
                  </View>
                  <View style={styles.titleView}>
                    <Text style={styles.itemTitle}>{item2.title}</Text>
                    <Text style={styles.itemIgredients}>
                      {item2.ingredients}
                    </Text>
                  </View>
                  <View style={styles.itemView}>
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
                </View>
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
