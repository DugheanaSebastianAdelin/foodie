import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import style from '../style/searchScreenStyle';
import useRestaurants from '../hooks/useRestaurants';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../redux/reduxProvider';
import data2 from '../data/restaurants';
import Location from '../components/Location';
import {add} from 'react-native-reanimated';

const SearchScreen = ({navigation, route, city, parentToChild}) => {
  // const [data, setData] = useState();
  const [userEmail, setUserEmail] = useState('');
  const [cart, setChart] = useState([]);

  const {google} = route.params;

  const [getMoviesFromApi, data] = useRestaurants();

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      auth().signOut();
      console.log('Logged OUT');
    } catch (error) {
      console.error(error);
    }
  };

  const location = 'Buzau';

  const data3 = data2.restaurants;

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    getMoviesFromApi();
  }, []);

  const renderText = () => {
    if (google == true) {
      const user = auth().currentUser;

      const userName = user.displayName;
      return <Text>Hello {userName}, Welcome back!</Text>;
    } else {
      return <Text>Hello {userEmail}, Welcome back!</Text>;
    }
  };

  const counter = useSelector(state => state.counter);
  const {address} = useSelector(state => state.addressReducer);
  console.log(address);

  return (
    <View
      style={{justifyContent: 'center', alignContent: 'center', margin: 10}}>
      <ImageBackground
        source={require('../img/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.1}}>
        <Text style={style.welcomeText}>{renderText()}</Text>
        {/* 
        <Location city={city} /> */}

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#F3F4F9',
              width: '80%',
              marginLeft: 20,
              borderRadius: 16,
              top: 13,
            }}>
            <TextInput
              style={{height: 56}}
              placeholder="Search for restaurants"
            />
          </TouchableOpacity>
          <Image style={{top: 18}} source={require('../img/filter.png')} />
        </View>

        <TouchableOpacity>
          <View style={style.titlesView}>
            <Text style={style.titles}>Nearby </Text>
            <Text style={style.titles}>Popular </Text>
            <Text style={style.titles}>New combo </Text>
            <Text style={style.titles}>Top </Text>
          </View>
        </TouchableOpacity>
        <View style={{flex: 2}}>
          <FlatList
            data={data3}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {id: item.id})
                  }>
                  <View
                    style={{
                      backgroundColor: 'white',
                      width: 142,
                      height: 178,
                      borderRadius: 16,
                      margin: 25,
                      shadowColor: 'rgba(32, 32, 32, 0.05)',
                    }}>
                    <Image
                      style={style.restaurantImage}
                      source={require('../img/restaurant1.png')}></Image>
                    <Text style={style.restaurantTitle}>{item.title}</Text>
                    <Text>{item.review} stars</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={Restaurant => Restaurant.id}
            horizontal={false}
            numColumns={2}
          />
        </View>

        <Text
          style={{
            color: '#FD4D05',
            fontFamily: 'DM Sans',
            fontWeight: '400',
            fontSize: 24,
          }}>
          Recommanded Dishes
        </Text>

        <View style={{flex: 0.8}}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: 'white',
                      flexGrow: 0,
                      flexShrink: 0,
                      flexBasis: 70,
                      borderRadius: 16,
                      margin: 25,
                      shadowColor: 'rgba(32, 32, 32, 0.05)',
                    }}>
                    <View style={{flexGrow: 1, flexShrink: 0, flexBasis: 65}}>
                      <Image
                        style={style.recommandedDishes}
                        source={{uri: item.strMealThumb}}></Image>
                      <Text style={{fontSize: 9, fontFamily: 'DM Sans'}}>
                        {item.strMeal}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}>
                        <Text style={{fontSize: 8, color: '#FFD863'}}>100</Text>
                        <TouchableOpacity onPress={() => selectItem(item)}>
                          <Image
                            style={{}}
                            source={require('../img/heart-small.png')}
                            // style={{height: 30, width: 30}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={data => data.idMeal}
            horizontal
          />
          <Button
            title="cart"
            onPress={() => navigation.navigate('Cart')}></Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;
