import {all, fork} from 'redux-saga/effects';
import {watchLogin, watchRegister, watchSignOut} from './authenticatorSaga';
import {watchCart} from './cartSaga';
// Imports: Redux Sagas

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignOut),
    fork(watchRegister),
    fork(watchCart),
  ]);
}
