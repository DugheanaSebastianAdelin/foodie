import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';


const SignUPScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   console.log(email);
//   console.log(password);

  const Register = ()=>{

    auth()
      .createUserWithEmailAndPassword(email,password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Search')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    }

  return (
    <View>
      {/* <Text>Signup</Text> */}
      <ImageBackground
        source={require('../img/background.png')}
        style={{width: '100%', height: '100%'}}
        imageStyle={{opacity: 0.1}}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../img/foodie.png')}
          />
        </View>

        <TouchableOpacity style={styles.emailPassword}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#241C1C"
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.emailPassword}>
          <TextInput
            textContentType='password'
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#241C1C"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={Register}>
          <Text style={styles.loginSignUpText}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

// navigation.navigate('Search')

export default SignUPScreen;

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
    // flex: 1,
    // justifyContent: "center",
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
