import {combineReducers} from 'redux';
import Products from './pruductsReducers';
import Carts from './cartReducers';
import isSearch from './isSearch';

export default combineReducers({
   Products,
   Carts,
   isSearch
})