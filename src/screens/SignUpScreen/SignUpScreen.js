import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
const SignUPScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = props.error;

  console.log(error, 'error');

  const navigation = useNavigation();

  const register = () => {
    return props.reduxRegister(email, password);
  };
  const login = () => {
    console.log(email, 'email');
    return props.reduxLogin(email, password, false);
  };

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

      <View
        style={{
          backgroundColor: '#F5F4F2',
          borderRadius: 32,
          justifyContent: 'center',
          marginTop: 10,
          marginHorizontal: 28,
          height: '9%',
        }}>
        <TextInput
          style={{
            marginLeft: 16,
            marginTop: 10,
            marginBottom: 10,
            fontFamily: 'Mulish',
            fontSize: 18,
            fontWeight: '400',
            lineHeight: 23,
            letterSpacing: 0,
            textAlign: 'left',
          }}
          placeholder="Email"
          placeholderTextColor="#241C1C"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
      </View>

      <View
        style={{
          backgroundColor: '#F5F4F2',
          borderRadius: 32,
          justifyContent: 'center',
          marginTop: 10,
          marginHorizontal: 28,
          height: '9%',
        }}>
        <TextInput
          textContentType="password"
          secureTextEntry={true}
          style={{
            marginLeft: 16,
            marginTop: 10,
            marginBottom: 10,
            fontFamily: 'Mulish',
            fontSize: 18,
            fontWeight: '400',
            lineHeight: 23,
            letterSpacing: 0,
            textAlign: 'left',
          }}
          placeholder="Password"
          placeholderTextColor="#241C1C"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
      </View>

      <TouchableOpacity
        style={{
          borderRadius: 32,
          backgroundColor: '#FD4D05',
          justifyContent: 'center',
          marginTop: 20,
          marginHorizontal: 28,
          height: '9%',
        }}
        onPress={register}>
        <Text style={styles.loginSignUpText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 32,
          backgroundColor: '#FD4D05',
          justifyContent: 'center',
          marginTop: 20,
          marginHorizontal: 28,
          height: '9%',
        }}
        onPress={login}>
        <Text style={styles.loginSignUpText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  console.log('stateSignUp', state);
  return {error: state.auth.error};
};
// navigation.navigate('Search')
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUPScreen);

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    flex: 1,
  },
  button: {
    borderRadius: 32,
    backgroundColor: '#FD4D05',
    width: 319,
    height: 63,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    fontFamily: 'Mulish',
    fontStyle: 'regular',
    fontSize: 18,
  },
  image: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emailPassword: {
    backgroundColor: '#F5F4F2',
    borderRadius: 32,
    width: 319,
    height: 63,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  loginSignUpText: {
    fontFamily: 'DM Sans',
    fontSize: 18,
    fontWeight: '700',
    color: '#F5F4F2',
    textAlign: 'center',
  },
});
