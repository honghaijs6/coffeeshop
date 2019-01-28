import { combineReducers } from 'redux';
import reducerUser from './reducer-user';



const allReducers = combineReducers({
  
  user:reducerUser,

});

export default allReducers;
