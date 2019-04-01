
/*

model = {

}
*/

import { AVATAR_URL } from '../../config/const';

const MODE = 'users';
const NAME = 'Member';

const iniState = {
  mode:MODE,
  name:NAME,
  state:{},
  list:[],
  isLoggedIn:false
}

export default function(state = iniState ,action = {}){
  switch(action.type){

     case 'LOGIN':
      
      let userInfo = action.userInfo; 
      userInfo.photoURL = userInfo.photoURL || AVATAR_URL;
      userInfo.phone = userInfo.phone || '';
      

      return {
         ...state,
         userInfo:userInfo,
         isLoggedIn:action.isLoggedIn
       }
     break;


    default:

    return state;

  }
};
