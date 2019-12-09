import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

// function* => generator funcion, is like an async function
// generator is more powerfull than async
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([
  // takeLastes() will just run the last click of the user,
  // so if the user clicks 3 times, the saga will discart the first 2.
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
