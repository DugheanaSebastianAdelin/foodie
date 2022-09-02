import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import data2 from '../../../assets/mockData/restaurants';
import useRestaurants from '../../hooks/useRestaurants';
import Location from '../Location/Location';
import style from './searchScreenStyle';
const SearchScreen = props => {
  // const [data, setData] = useState();
  const [userEmail, setUserEmail] = useState('');
  const [cart, setChart] = useState([]);

  const [getMoviesFromApi, data] = useRestaurants();
  const name = props.displayName;
  const email = props.email;
  const uuid = props.uuid;
  console.log(uuid, 'UUIDD');
  const navigation = useNavigation();
  console.log(email, 'emaillllllllllllllllllll');

  const signOut = () => {
    props.reduxSignOut();

    navigation.navigate('Login');
  };

  const restaurants = data2.restaurants;

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    getMoviesFromApi();
  }, []);

  const renderText = () => {
    if (name != '' && name) {
      return <Text>Hello {name}, Welcome back!</Text>;
    } else {
      return <Text>Hello {email}, Welcome back!</Text>;
    }
  };
  useEffect(() => {
    console.log(props);
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        flex: 1,
      }}>
      <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={{flex: 1}}
        imageStyle={{opacity: 0.1}}>
        <View>
          <Text style={style.welcomeText}>{renderText()}</Text>

          {/* <Button
            title="log out"
            onPress={signOut}
            style={{width: 20}}></Button> */}
          {/* </View> */}

          <Location />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F3F4F9',
                width: '80%',
                marginLeft: 20,
                borderRadius: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Image
                  style={{}}
                  source={require('../../../assets/img/searchIcon.png')}
                />
                <TextInput
                  style={{height: 56, paddingLeft: 20}}
                  placeholder="Search for restaurants"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginLeft: 10,
              }}>
              <Image
                style={{alignSelf: 'center'}}
                source={require('../../../assets/img/filter.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Text style={style.titles}>Nearby </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={style.titles}>Popular </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={style.titles}>New combo </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.titles}>Top </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginHorizontal: 20, height: '60%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {id: item.id})
                  }>
                  <View style={style.itemView}>
                    <Image
                      style={style.itemImage}
                      source={require('../../../assets/img/restaurant1.png')}></Image>

                    <Text style={style.itemTitle}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                      }}>
                      <Image
                        style={{width: 68, height: 12}}
                        source={require('../../../assets/img/ratings.png')}
                      />
                      <Image
                        style={{width: 24, height: 24}}
                        source={require('../../../assets/img/heart.png')}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            contentContainerStyle={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            keyExtractor={Restaurant => Restaurant.id}
            style={{flexWrap: 'wrap', flex: 1}}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              color: '#FD4D05',
              fontFamily: 'DM Sans',
              fontWeight: '400',
              fontSize: 20,
            }}>
            Recommanded Dishes
          </Text>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: 'white',

                      borderRadius: 16,

                      margin: 5,
                      shadowColor: 'rgba(32, 32, 32, 0.05)',
                    }}>
                    <Image
                      style={{
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,

                        height: 60,
                        width: 74,
                      }}
                      source={{uri: item.strMealThumb}}></Image>
                    <View style={{}}>
                      <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={{fontSize: 8, fontFamily: 'DM Sans'}}>
                        {item.strMeal}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <Text style={{fontSize: 8, color: '#FFD863'}}>100</Text>
                      <TouchableOpacity onPress={() => selectItem(item)}>
                        <Image
                          style={{}}
                          source={require('../../../assets/img/heart-small.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={data => data.idMeal}
            horizontal
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state@$%#####22222222222', state);
  return {
    displayName: state.auth.userProfile,
    email: state.auth.email,
    uuid: state.auth.userToken,
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
