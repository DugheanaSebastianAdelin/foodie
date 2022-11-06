import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {call, put, takeLatest} from 'redux-saga/effects';

const loginWithEmail = async (email, password) => {
  return await auth().signInWithEmailAndPassword(email, password);
};

const loginWithGoogle = async () => {
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // console.log(googleCredential,'google credential')
  //take token from here
  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};
const register2 = async (email, password) => {
  return await auth()
    .createUserWithEmailAndPassword(email, password)

    .catch(errorSignUp => {
      return {error: errorSignUp};
    });
};

async function storeToken(token) {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (error) {
    console.log('AsyncStorage error during token store:', error);
  }
}

function* login(action) {
  try {
    yield put({
      type: 'SET_LOADING',
      payload: true,
    });
    const data = action.payload.loginWithGoogle
      ? yield loginWithGoogle()
      : yield loginWithEmail(action.payload.email, action.payload.password);

    yield call(storeToken, data.user.uid);

    if (data.error) {
      yield put({
        type: 'ERROR',
        payload: data.error,
      });
    }

    yield put({
      type: 'LOGIN_WITH_EMAIL_AND_PASSWORD',
      payload: {
        userProfile: data.user.displayName,
        userToken: data.user.uid,
        displayName: data.user.displayName,
        email: data.user.email,
      },
    });

    if (!data.error) {
      yield put({
        type: 'ERROR',
        payload: '',
      });
    }

    yield put({
      type: 'SET_LOADING',
      payload: false,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: 'ERROR',
      payload: error,
    });
  }

  yield put({type: 'LOGIN_SUCCESS'});
}

function* register(action) {
  try {
    yield put({
      type: 'SET_LOADING',
      payload: true,
    });

    const response = yield register2(
      action.payload.email,
      action.payload.password,
    );

    yield firestore()
      .collection('users')
      .doc(response.user.uid)
      .set({email: action.payload.email});

    yield loginWithEmail(action.payload.email, action.payload.password);
    const data = yield firestore()
      .collection('users')
      .doc(response.user.uid)
      .get();
    const newData = data.getData();

    yield put({
      type: 'LOGIN_WITH_EMAIL_AND_PASSWORD',
      payload: {
        // userProfile: data.user.displayName,
        // userToken: data.user.uid,
        // displayName: data.user.displayName,
        // email: data.user.email,
      },
    });

    yield put({
      type: 'REGISTER',
      payload: {
        email: action.payload.email,
        // uuid: data.user.uid,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: 'ERROR',
      payload: error,
    });
  } finally {
    yield put({
      type: 'SET_LOADING',
      payload: false,
    });
  }
}

function* signOut() {
  try {
    yield put({
      type: 'SET_LOADING',
      payload: true,
    });
    GoogleSignin.signOut();
    auth().signOut();
    yield put({
      type: 'SIGN_OUT',
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: 'ERROR',
      payload: error,
    });
  } finally {
    yield put({
      type: 'SET_LOADING',
      payload: false,
    });
  }
}

export function* watchLogin() {
  yield takeLatest('LOGIN_WITH_EMAIL_AND_PASSWORD_SAGA', login);
}
export function* watchRegister() {
  yield takeLatest('REGISTER_SAGA', register);
}

export function* watchSignOut() {
  yield takeLatest('LOGOUT_SAGA', signOut);
}
