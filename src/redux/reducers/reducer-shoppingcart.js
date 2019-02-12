
/*
action = {
  type:'ACTION_TYPE',
  model:Model,
  data:{}
  id:0
}
*/


const MODE = 'orders';
const NAME = 'Shopping Cart';

const iniState = {
  mode:MODE,
  name:NAME,
  state:{},
  list:[],
  isLoggedIn:false
}

export default function(state = iniState ,action = {}){
  switch(action.type){

    case 'reset-'+MODE:

     console.log('reducer order start-----');
     console.log(action.list);

     return {
       ...state,
       list:action.list
     }

   break ;



    default:

    return state;

  }
};
