import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

import data from '../data/restaurants';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {useDispatch} from 'react-redux';
import Menu from '../components/restaurantDetail/Menu';
const RestaurantDetail = ({route}) => {
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

  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        style={{width: '100%', height: 174}}
        source={require('../img/restaurant1.png')}
      />
      <ImageBackground
        source={require('../img/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.1}}>
        <View style={{margin: 18}}>
          <Text
            style={{
              fontFamily: 'DM Sans',
              fontSize: 31,
              lineHeight: 40,
              color: '#241C1C',
            }}>
            {restaurantName}
          </Text>
          <View style={styles.rowSpaceBetwin}>
            <Text
              style={{
                color: '#FD4D05',
                fontFamily: 'DM Sans',
                fontSize: 15.61,
                lineHeight: 20.33,
              }}>
              {location}
            </Text>
            <Image
              style={{width: 20, height: 20}}
              source={require('../img/star.png')}
            />
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Cuisine</Text>
            <Text>{cuisine}</Text>
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Price range</Text>
            <Text>{priceRange}</Text>
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Foodie Ranks</Text>
            <Text>#2 of 250</Text>
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
          <View style={styles.rowSpaceBetwin}>
            <Text>{adress}</Text>
            <Image
              style={{height: 55, width: 55}}
              source={require('../img/restaurant1.png')}
            />
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Phone</Text>
            <Text>{phone}</Text>
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Email</Text>
            <Text>{email}</Text>
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Website</Text>
            <Text>{website}</Text>
          </View>
          <View style={styles.rowSpaceBetwin}>
            <Text>Menu</Text>
            <Text>See all</Text>
          </View>
          {restaurant.map(item =>
            item.menu.combos.map(item2 => (
              <Menu key={item2.id} item={item2} restaurantName={item.title} />
            )),
          )}

          {/* <Menu item ={item}/> */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default RestaurantDetail;

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
});
