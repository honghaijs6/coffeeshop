import {AsyncStorage} from 'react-native';

// "http://192.168.1.39", //"https://backendsql.herokuapp.com",
// 3030, //443,
const server = {
  host: "http://192.168.1.39",
  port: 3030,

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

  async setHeader(){


    return  {
      headers:{
        "Content-Type": "application/json",
        "Authorization": await this.token(),
        "cache-control": "no-cache"
      }
    }
  },
  async token(){
    return await AsyncStorage.getItem('feathers-jwt');
  },

}

export default server;
