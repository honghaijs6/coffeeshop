
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
  isLoggedIn:false,
  userInfo:{},
  tempInfo:{
    "birthday": "",
    "city": "",
    "code": "",  
    "company_id": 0,
    "creator_id": 0,
    "creditcard": {},
    "email": "temp@gmail.com",
    "expo_token": "ExponentPushToken[am-4NUHyRzvP9cFXNSCwxw]",
    "gender": 1,
    "home_address": "",
    "id": 0,
    "is_admin": 0,
    "is_deleted": 0,
    "json": {
      name:'temp'
    },
    "level": 0,
    "name": "",
    "phone": "",
    "photoURL": "https://firebasestorage.googleapis.com/v0/b/coffee-shop-229518.appspot.com/o/images%2Favatar.jpg?alt=media&token=1194edcd-f16c-4f4f-ba47-fb35298903b6",
    "point": 0,
    "recent_address": "",
    "state": null,
    "status": 0,
    "type": 1,
    "username": null,
    "work_address": "",
    
  }
}

export default function(state = iniState ,action = {}){
  switch(action.type){

     case 'LOGIN':
      
      let userInfo = action.userInfo; 
      
      //userInfo.photoURL = userInfo.photoURL || AVATAR_URL;
      //userInfo.phone = userInfo.phone || '';
      

      return {
         ...state,
         userInfo:userInfo,
         isLoggedIn:action.isLoggedIn
       }
     break;

     case 'TEMP':
        return {
          ...state,
          tempInfo:action.tempInfo
        }

     break;


    default:

    return state;

  }
};
