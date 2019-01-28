
/*
action = {
  type:'ACTION_TYPE',
  model:Model,
  data:{}
  id:0
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
         isLoggedIn:action.isLoggedIn
       }
     break;
     case 'STATE-'+MODE:
       return {
         ...state,
         state:action.state

       }
     break;

    /* PROACTIVE : DATA */
    case 'GET-'+MODE:

      return {
        ...state,
        list:action.list
      }

    break ;

    case 'POST-'+MODE:


      return {
        ...state,
        list:action.list
      }

    break ;

    case 'PUT-'+MODE:

      return {
        ...state,
        list:action.list
      }

    break ;

    case 'DELETE-'+MODE:


      return {
        ...state,
        list:action.list
      }

    break ;

    /* PASSIVE DATA : realtime received on listenServer  */
    case 'reset-'+MODE:

      return {
        ...state,
        list:action.list
      }
    break ;


    default:

      return state;

  }
};
