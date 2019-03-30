import {AsyncStorage} from 'react-native';

const server = {
  host:"https://backendsql.herokuapp.com",//"https://backendcoffee.herokuapp.com",
  port:443,

  url:'',
  paginate:{
    p:0,
    offset:0,
    max:50,
    key:''
  },

  base(){
    return this.host+':'+this.port
  },

  setHeader(){

    return  {
      headers:{
        "Content-Type": "application/json",
        "Authorization": this.token(),
        "cache-control": "no-cache"
      }
    }
  },
  token:function(){
    return AsyncStorage.getItem('feathers-jwt');
  },

}

export default server;
