import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from '../style/loginScreenStyle';
import {useNavigation} from '@react-navigation/native';

// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
const HomeScreen = () => {
  // const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState('');
  const [logged, setAuthenticated] = useState(false);
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


  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log(`Logged succes with ${email} `);
      navigation.navigate('SearchScreen',{google:false});
    } catch (e) {
      console.log(e);
    }
  };

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  return (
    <View>
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
            style={styles.textInput}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            placeholderTextColor="#241C1C"
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.loginSignUpText}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.SignUP]}
          onPress={() =>
            // navigation.navigate('SignUp');
            console.log('signup')
          }>
          <Text style={styles.loginSignUpText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            onGoogleButtonPress()
              .then(res => {
                // setloggedIn(true);
                setuserInfo(res.user);

                navigation.navigate('SearchScreen', {
                  google: true,
                  user: userInfo,
                });
              })
              .catch(error => console.log(error))
          }>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <Image source={require('../img/gicon.png')} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
