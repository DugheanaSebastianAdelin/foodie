import React from 'react';
import { StyleSheet } from 'react-native';

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
      marginTop: 15,
      marginBottom: 10,
    },
    SignUP: {
      backgroundColor: '#FBB816B2',
      marginTop: 10,
    },
    loginSignUpText: {
      fontFamily: 'DM Sans',
      fontSize: 18,
      fontWeight: '700',
      color: '#F5F4F2',
      textAlign: 'center',
    },
  });

  export  default styles;