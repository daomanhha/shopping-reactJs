import {combineReducers} from 'redux';
import Products from './pruductsReducers';
import Carts from './cartReducers';

export default combineReducers({
   Products,
   Carts
})