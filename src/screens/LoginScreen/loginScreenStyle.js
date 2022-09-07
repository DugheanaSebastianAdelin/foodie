import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  emailPasswordView: {
    backgroundColor: '#F5F4F2',
    borderRadius: 32,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 28,
    height: '9%',

  },
  textInputEmailPassword: {
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: 'left',
  },
  loginTouchable: {
    borderRadius: 32,
    backgroundColor: '#FD4D05',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 28,
    height: '9%',
  },
  signUpTouchable: {
    borderRadius: 32,
    backgroundColor: '#FBB816B2',
    justifyContent: 'center',
    marginTop: 7,
    marginHorizontal: 28,
    height: '9%',
    height: '9%',
  },
  loginText: {
    fontFamily: 'DM Sans',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23.44,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#F5F4F2',
  },
  signUpText: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center',
    color: '#241C1C',
  },
  forgotPassword: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 20,
    textAlign: 'center',
    color: '#241C1C',
  },
  socialAuthView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 15,
  },
});

export default styles;
