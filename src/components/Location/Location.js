import geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {images} from '../../core/constants/images';
import {baseurl} from '../../network/getAddress';
import style from './locationStyle';

const Location = () => {
  const [coords, setCoords] = useState({lat: 0, long: 0});
  const [address, setAddress] = useState([]);

  const dispatch = useDispatch();

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
        Alert.alert(error.message, 'Please activate location ');
        console.log(error.message);
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  };

  const findAddress = async (latitude, longitude) => {
    const endpoint = `reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
    const url = `${baseurl}${endpoint}`;

    const response = await fetch(url);
    const data = await response.json();

    setAddress({
      building: data.address.building,
      road: data.address.road,
      city: data.address.city,
    });
    dispatch({
      type: 'ADD_ADDRESS',
      payload: {...address},
    });
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

  return (
    <View style={style.container}>
      <Image source={images.locationIcon} />
      <Text style={style.address}>{address.city}</Text>
    </View>
  );
};

export default Location;
