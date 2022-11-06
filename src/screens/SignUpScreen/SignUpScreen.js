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
import styles from '../LoginScreen/loginScreenStyle';

const SignUpScreen = ({userToken, reduxLogin, reduxRegister}) => {
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

  const Login = () => {
    reduxLogin(email, password, false);
  };

  const googleLogin = () => {
    reduxLogin(email, password, true);
  };

  const Register = () => {
    return reduxRegister(email, password);
  };

  const isVisible = useIsFocused();
  useEffect(() => {
    if (isVisible) {
      if (uid != '' && uid) {
        navigation.navigate('SearchScreen');
      }
    }
  });
  console.log(uid, 'uuiidd');

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
      <TouchableOpacity style={styles.loginTouchable} onPress={Register}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpTouchable} onPress={Login}>
        <Text style={styles.signUpText}>Log in</Text>
      </TouchableOpacity>

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
  return {userToken: state.auth.userToken};
};

const mapDispatchToProps = dispatch => {
  return {
    reduxRegister: (email, password) =>
      dispatch({
        type: 'REGISTER_SAGA',
        payload: {
          email: email,
          password: password,
        },
      }),
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
