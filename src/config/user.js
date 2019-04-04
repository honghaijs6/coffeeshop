
import {AsyncStorage} from 'react-native';
import axios from 'react-native-axios';
import socket from './socket';


import { AVATAR_URL } from '../config/const';
import store from '../redux/store';
import {myTime} from '../hook/ultil/myTime';


const USER = {


    _whereStateChange(newState){
        store.dispatch(newState);
    },
    

    async register(data){
        return new Promise((resole,reject)=>{
            const url = socket.server.host+'/users';
            axios.post(url,data).then((res)=>{
                res = res.data ;

                if(res.name==='success'){

                    AsyncStorage.setItem('userInfo',JSON.stringify(res.data)).then(()=>{

                        resole(res.name);

                   })


                }else{
                    resole(res.message);
                }

            })
        });
    },



    async update(id,data){

        return new Promise((resole,reject)=>{

            const url = socket.server.host+'/users?id='+id;
            axios.put(url,data).then((res)=>{

                res = res.data ;

                if(res.name==='success'){

                    let userInfo = store.getState().user.userInfo;

                    Object.assign(userInfo,data);


                    AsyncStorage.setItem('userInfo',JSON.stringify(userInfo)).then(()=>{

                        // REFESH REDUX
                        this._whereStateChange({
                            type:'LOGIN',
                            isLoggedIn:true,
                            userInfo:userInfo
                        });

                        resole('Update success')



                    })

                }else{
                    resole(res.message);
                }


            });


        })
    },

    async logout(){
        return new Promise((resole,reject)=>{

            AsyncStorage.clear(()=>{

                this._whereStateChange({
                    type:'LOGIN',
                    isLoggedIn:false,
                    userInfo:{}
                });

                resole(true);
            })

        })
    },

    async checkLoginStatus(){
        return new Promise((resole,reject)=>{

            AsyncStorage.getItem('userInfo').then((data)=>{

                const info = JSON.parse(data) || {}

                resole(info);

                this._whereStateChange({
                    type:'LOGIN',
                    isLoggedIn: data === null ? false : true ,
                    userInfo:info
                })




            });

        })
    },
    async authenticate(email,password){

        return new Promise((resole,reject)=>{

            socket.emit('authenticate', {

                "strategy":"local",
                "email": email,
                "password": password

                }, (message, data)=> {

                  if(data!==undefined){

                    AsyncStorage.setItem('token',data.accessToken);


                    // GET USER INFO ADD SAVE LOCALSTOREAGE
                    const url = socket.server.host+'/users?email='+email;
                    axios.get(url).then((res)=>{

                         const data = res.data;
                         if(data.name==='success'){
                           AsyncStorage.setItem('userInfo',JSON.stringify(data.rows[0])).then(()=>{

                                resole({
                                    message:message,
                                    data:data,
                                    userInfo:data.rows[0]
                                });



                           })

                         }


                    })

                  }else{
                    resole({
                        message,data
                    })
                  }

            });

        })
    }
}

export default USER;
