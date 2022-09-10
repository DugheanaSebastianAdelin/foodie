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
import Location from '../../components/Location/Location';
import {images} from '../../core/constants/images';
import useRestaurants from '../../hooks/useRestaurants';
import style from './searchScreenStyle';

const SearchScreen = ({displayName, email, reduxSignOut}) => {
  const [getRecommandedDishes, data] = useRestaurants();
  const name = displayName;

  const navigation = useNavigation();

  const signOut = () => {
    reduxSignOut();

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
        style={style.flex1}
        source={images.background}
        imageStyle={style.backgroundImageStyle}>
        <View>
          <View style={style.row}>
            <Text style={style.welcomeText}>{renderText()}</Text>

            <TouchableOpacity onPress={signOut} style={{marginLeft: 10}}>
              <Text>OUT</Text>
            </TouchableOpacity>
          </View>

          <Location />

          <View style={style.row}>
            <View style={style.inputView}>
              <View style={style.searchIconTextView}>
                <Image source={images.searchIcon} />
                <TextInput
                  style={style.textInput}
                  placeholder="Search for restaurants"
                />
              </View>
            </View>

            <TouchableOpacity style={style.filterTouchable}>
              <Image source={images.filter} />
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

        <View style={style.restaurantsFlatListView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            contentContainerStyle={style.flatlistContainerStyle}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', {id: item.id})
                  }>
                  <View style={style.restaurantsView}>
                    <Image
                      style={style.restaurantsImage}
                      source={images.restaurantImage}></Image>

                    <Text style={style.restaurantsTitle}>{item.title}</Text>
                    <View style={style.restaurantsRatingsHeart}>
                      <Image
                        style={style.ratings}
                        source={images.restaurantRating}
                      />
                      <Image
                        style={style.heart}
                        source={images.restaurantFavorite}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={Restaurant => Restaurant.id}
          />
        </View>
        <View>
          <Text style={style.recommandedDishesHeader}>Recommanded Dishes</Text>

          <FlatList
            data={data.meals}
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
                        <Image source={images.rdFavorite} />
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
