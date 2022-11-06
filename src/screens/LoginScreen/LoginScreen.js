import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {images} from '../../core/constants/images';
import styles from './loginScreenStyle';

const LoginScreen = ({userToken, reduxLogin}) => {
  const uid = userToken;
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '771101847587-tu8c19po1jvudpc2335u7kmq79gmd22n.apps.googleusercontent.com',

      offlineAccess: true,
    });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // console.log(email, 'email');
    reduxLogin(email, password, false);
  };

  const googleLogin = () => {
    reduxLogin(email, password, true);
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      // console.log(value);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const isVisible = useIsFocused();
  useEffect(() => {
    // console.log(getData(), 'test');
    if (isVisible) {
      if (uid != '' && uid) {
        navigation.navigate('SearchScreen');
      }
    }
  });

  return (
    <ImageBackground
      source={images.background}
      style={styles.flex1}
      imageStyle={styles.imageBackgroundStyle}>
      <View style={styles.foodieImageContainer}>
        <Image style={styles.foodieImage} source={images.foodieLogo} />
      </View>
      <View style={styles.emailPasswordView}>
        <TextInput
          style={styles.textInputEmailPassword}
          placeholder="Email"
          placeholderTextColor="#241C1C"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
      </View>

      <View style={styles.emailPasswordView}>
        <TextInput
          style={styles.textInputEmailPassword}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
          placeholderTextColor="#241C1C"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
      </View>
      <TouchableOpacity style={styles.loginTouchable} onPress={login}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpTouchable}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </View>
      <View style={styles.socialAuthView}>
        <TouchableOpacity onPress={() => googleLogin()}>
          <Image source={images.googleLogo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.facebookLogo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={images.appleLogo} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  // console.log('state@$%#####', state);
  return {userToken: state.auth.userToken};
};

const mapDispatchToProps = dispatch => {
  return {
    reduxLogin: (email, password, withGoogle) =>
      dispatch({
        type: 'LOGIN_WITH_EMAIL_AND_PASSWORD_SAGA',
        payload: {
          email: email,
          password: password,
          loginWithGoogle: withGoogle,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
