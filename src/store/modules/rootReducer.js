/** Forma correta de usar REDUCER é criar esse arquivo rootReducer,
 * usar ele como forma de unir os outros REDUCER, pos no index do store, ele deve receber somente um  REDUCER.
 * Eu combino os reducers com um "combineReducers" do redux
 */

import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
    cart,
});