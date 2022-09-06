import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
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
  const [getRecommandedDishes, data] = useRestaurants();
  const name = props.displayName;
  const email = props.email;

  const navigation = useNavigation();

  const signOut = () => {
    props.reduxSignOut();

    navigation.navigate('Login');
  };

  const restaurants = data2.restaurants;

  useEffect(() => {
    getRecommandedDishes();
  }, []);

  const renderText = () => {
    if (name != '' && name) {
      return <Text>Hello {name}, Welcome back!</Text>;
    } else {
      return <Text>Hello {email}, Welcome back!</Text>;
    }
  };

  return (
    <View style={style.mainView}>
      <ImageBackground
        source={require('../../../assets/img/background.png')}
        style={{flex: 1}}
        imageStyle={{opacity: 0.1}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.welcomeText}>{renderText()}</Text>

            <TouchableOpacity onPress={signOut} style={{marginLeft: 10}}>
              <Text>OUT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}
              style={{marginLeft: 10}}>
              <Text>CART</Text>
            </TouchableOpacity>
          </View>

          <Location />

          <View style={{flexDirection: 'row'}}>
            <View style={style.inputView}>
              <View style={style.searchIconTextView}>
                <Image
                  style={{}}
                  source={require('../../../assets/img/searchIcon.png')}
                />
                <TextInput
                  style={{height: 56, paddingLeft: 20}}
                  placeholder="Search for restaurants"
                />
              </View>
            </View>

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
          <View style={style.filtersView}>
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
                  <View style={style.restaurantsView}>
                    <Image
                      style={style.restaurantsImage}
                      source={require('../../../assets/img/restaurant1.png')}></Image>

                    <Text style={style.restaurantsTitle}>{item.title}</Text>
                    <View style={style.restaurantsRatingsHeart}>
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
        <View>
          <Text style={style.recommandedDishesHeader}>Recommanded Dishes</Text>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View style={style.rdView}>
                    <Image
                      style={style.rdImage}
                      source={{uri: item.strMealThumb}}></Image>
                    <View style={{}}>
                      <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={style.rdText}>
                        {item.strMeal}
                      </Text>
                    </View>
                    <View style={style.rdPriceHeartView}>
                      <Text style={style.rdPrice}>100</Text>
                      <TouchableOpacity onPress={() => selectItem(item)}>
                        <Image
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
