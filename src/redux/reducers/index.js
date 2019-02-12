import { combineReducers } from 'redux';
import reducerUser from './reducer-user';
import reducerShoppingCart from './reducer-shoppingcart';



const allReducers = combineReducers({

  user:reducerUser,
  shoppingcart:reducerShoppingCart

});

export default allReducers;
