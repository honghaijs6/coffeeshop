import { combineReducers } from 'redux';
import reducerUser from './reducer-user';
import reducerShoppingCart from './reducer-shoppingcart';
import reducerCate from './reducer-category';
import reducerProduct from './reducer-product';
import reducerOrder from './reducer-order';




const allReducers = combineReducers({

  user:reducerUser,
  shoppingcart:reducerShoppingCart,
  category:reducerCate,
  product:reducerProduct,
  order:reducerOrder

});

export default allReducers;
