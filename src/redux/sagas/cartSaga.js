import {put, takeLatest} from 'redux-saga/effects';

function* addToCart(action) {
  try {
    yield put({
      type: 'SET_LOADING',
      payload: true,
    });
    const data = action.payload;

    console.log(data, 'dataaaaaaaaaa');
    yield put({
      type: 'ADD_TO_CART',
      payload: {
        id: data.id,
        name: data.title,
        ingredients: data.ingredients,
        price: data.price,
        checkboxValue: data.checkboxValue,
        img: data.img,
        category: data.category,
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

export function* watchCart() {
  yield takeLatest('ADD_TO_CART_SAGA', addToCart);
}
