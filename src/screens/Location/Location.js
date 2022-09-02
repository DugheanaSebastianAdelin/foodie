import geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';

const Location = props => {
  const [coords, setCoords] = useState({lat: 0, long: 0});

  const [address, setAddress] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const signOut = () => {
    // props.reduxSignOut();
    dispatch({
      type: 'LOGOUT_SAGA',
    }),
      navigation.navigate('Login');
  };

  const findCoordinates = () => {
    geolocation.getCurrentPosition(
      position => {
        const location = position;

        setCoords({
          lat: location.coords.latitude,
          long: location.coords.longitude,
        });
      },
      error => {
        Alert.alert(error.message, 'Please activate location ', [
          {
            text: 'OK',
            onPress: () =>
              dispatch({
                type: 'LOGOUT_SAGA',
              }),
          },
        ]);
        console.log(error.message);
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  };

  const findAddress = (latitude, longitude) => {
    try {
      let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
      console.log('lat', latitude, 'long', longitude);
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('data', data);

          setAddress({
            building: data.address.building,
            road: data.address.road,
            city: data.address.city,
          });
          dispatch({
            type: 'ADD_ADDRESS',
            payload: {...address},
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    findCoordinates();
  }, []);

  useEffect(() => {
    if (coords.lat != 0 && coords.long != 0) {
      findAddress(coords.lat, coords.long);
      console.log(coords.lat);
    }
  }, [coords]);

  // console.log(coords);
  return (
    <View style={{flexDirection: 'row',margin:10}}>
      <Image
        style={{}}
        source={require('../../../assets/img/location.png')}
        // style={{height: 30, width: 30}}
      />
      <Text
        style={{
          color: '#FD4D05',
          fontFamily: 'DM Sans',
          fontSize: 13.66,
          lineHeight: 17.78,
          letterSpacing: -1,
 
        }}>
        {address.city}
      </Text>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    reduxSignOut: () =>
      dispatch({
        type: 'LOGOUT_SAGA',
      }),
  };
};

export default connect(null, mapDispatchToProps)(Location);
