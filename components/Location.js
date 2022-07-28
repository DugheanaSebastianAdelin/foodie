// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';

//import all the components we are going to use.
import geolocation from '@react-native-community/geolocation';
import {add, set} from 'react-native-reanimated';

const Location = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [city, setCity] = useState('');

  const [address, setAddress] = useState([]);
  const dispatch = useDispatch();

  const findCoordinates = () => {
    geolocation.getCurrentPosition(
      position => {
        const location = position;

        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      },
      error => console.log(error.message),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  };

  findCoordinates();

  const address2 = () => {
    try {
      let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // setCity(data.address.city);

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

  const action = () => {
    console.log(address, 'address');
    dispatch({
      type: 'ADD_ADDRESS',
      payload: {...address},
    });
  };

  setTimeout(address2, 6000);

  useEffect(() => {}, []);

  return (
    <View>
      <Text
        style={{
          color: '#FD4D05',
          fontFamily: 'DM Sans',
          fontSize: 13.66,
          lineHeight: 17.78,
          letterSpacing: -1,
          paddingLeft: 10,
        }}>
        {city}
      </Text>
    </View>
  );
};

export default Location;
