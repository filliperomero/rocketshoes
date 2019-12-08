import { combineReducers } from 'redux';

import cart from './cart/reducer';

// If you need to put one more reduce, simple put bellow
export default combineReducers({
  cart,
});
