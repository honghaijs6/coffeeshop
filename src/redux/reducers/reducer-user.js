
/*

model = {

}
*/


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
       return {
         ...state,
         userInfo:action.userInfo,
         isLoggedIn:action.isLoggedIn
       }
     break;


    default:

    return state;

  }
};
