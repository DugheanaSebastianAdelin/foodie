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
import styles from '../LoginScreen/loginScreenStyle';
const SignUpScreen = props => {
  const [userInfo, setuserInfo] = useState('');

  const uid = props.userToken;
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '771101847587-tu8c19po1jvudpc2335u7kmq79gmd22n.apps.googleusercontent.com',

      offlineAccess: true,
    });
    console.log(userInfo);
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
    console.log(email, 'email');
    props.reduxLogin(email, password, false);
  };

  const googleLogin = () => {
    props.reduxLogin(email, password, true);
  };

  const Register = () => {
    return props.reduxRegister(email, password);
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
      source={require('../../../assets/img/background.png')}
      style={{flex: 1}}
      imageStyle={{opacity: 0.1}}>
      <View style={{alignItems: 'center', marginTop: 35}}>
        <Image
          style={{width: 200, height: 200}}
          source={require('../../../assets/img/foodie.png')}
        />
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
          <Image source={require('../../../assets/img/googleLogo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/img/fbLogo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/img/appleLogo.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  console.log('state@$%#####', state);
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
