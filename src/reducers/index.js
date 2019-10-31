import {combineReducers} from 'redux';
import Products from './pruductsReducers';
import Carts from './cartReducers';
import isSearch from './isSearch';
import discount from './discountReducer';

export default combineReducers({
   Products,
   Carts,
   isSearch,
   discount
})