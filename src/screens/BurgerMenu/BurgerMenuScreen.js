import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {images} from '../../core/constants/images';
import styles from './burgerMenuStyle';

const BurgerMenuScreen = ({reduxSignOut, email}) => {
  const navigation = useNavigation();

  const signOut = () => {
    reduxSignOut();
    navigation.navigate('Login');
  };

  const user = auth().currentUser;
  const userImage = auth().currentUser.photoURL;
  const userName = auth().currentUser.displayName;
  const userUid = auth().currentUser.uid;

  const data = firestore().collection('users').doc(`${userUid}`).get();

  const renderProfile = () => {
    if (userName != '' && userName) {
      return (
        <View style={styles.flexRow}>
          <Image
            source={{
              uri: userImage,
            }}
            style={styles.userImg}
          />
          <View style={styles.flexCloumn}>
            <Text>{userName}</Text>
            <Text>View your profile</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.flexRow}>
          <Image source={images.background} style={styles.userImg} />
          <View style={styles.flexCloumn}>
            <Text>{email}</Text>
            <Text>View your profile</Text>
          </View>
        </View>
      );
    }
  };

  const goToCartScreen = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.flex1}
        source={images.background}
        imageStyle={styles.opacity01}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{
              uri: 'https://flyclipart.com/thumb2/close-button-clip-art-645978.png',
            }}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        {renderProfile()}

        {/* <ImagePicker /> */}
        <TouchableOpacity onPress={goToCartScreen}>
          <Text>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={signOut}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenuScreen);
