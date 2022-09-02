import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {put, takeLatest} from 'redux-saga/effects';
const loginWithEmail = async (email, password) => {
  return await auth().signInWithEmailAndPassword(email, password);
};

const loginWithGoogle = async () => {
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

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

function* login(action) {
  try {
    yield put({
      type: 'SET_LOADING',
      payload: true,
    });
    const data = action.payload.loginWithGoogle
      ? yield loginWithGoogle()
      : yield loginWithEmail(action.payload.email, action.payload.password);

    console.log('aici vedem data!!!!!!', data);
    console.log(data.user.displayName, 'display nameeeeeeeeeeeeeeeeee');
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
    console.log(action, 'action');
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
}

function* register(action) {
  try {
    yield put({
      type: 'SET_LOADING',
      payload: true,
    });
    console.log(action.payload, 'response');

    const response = register2(action.payload.email, action.payload.password);
    // console.log(action.payload, 'response');
    console.log(response, 'responseeeeeeeeee222');

    let userData;

    const data = Promise.resolve(response).then(res => {
      console.log(res.user.uid, 'ressss');
      if (response.error) {
        throw response.error;
      }
      firestore()
        .collection('users')
        .doc(res.user.uid)
        .set({email: action.payload.email});
      loginWithEmail(action.payload.email, action.payload.password);

      const getData = firestore().collection('users').doc(res.user.uid).get();

      // .then(doc => {
      //   console.log(doc, 'data firestore');
      //   return doc.docs.map(item => {
      //     return item.data();
      //   });
      // });
      return getData.data();
    });
    console.log(data, 'DATAAAAAAAAAAAAAAA');

    yield put({
      type: 'LOGIN_WITH_EMAIL_AND_PASSWORD',
      payload: {
        // userProfile: data.user.displayName,
        // userToken: data.user.uid,
        // displayName: data.user.displayName,
        // email: data.user.email,
      },
    });
    console.log(action, 'action');
    console.log(action.payload.email, 'response');
    // console.log(data.user.uid, 'uuiddd REGISTERRR');

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
