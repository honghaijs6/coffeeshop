
window.navigator.userAgent = "react-native";

import server from './server';
//import io from 'socket.io-client/dist/socket.io';
import io from 'socket.io-client';
const connectionConfig = {
  jsonp: false,
  autoConnect: false,
  reconnectionDelay: 1000,
  reconnectionDelayMax : 5000,
  reconnectionAttempts: 5,
  transports: ['websocket'], // you need to explicitly tell it to use websockets
};
const socket = io(server.host,connectionConfig);

socket.open();

socket.on('reconnect_attempt', () => {
  socket.io.opts.transports = ['websocket'];
});

socket.on('connect',()=>{
  console.log('socket connected');
});

socket.on('reconnect',()=>{
  console.log('socket re-connect');

});

socket.on('connecting',()=>{
  console.log('socket connecting');
});

socket.on('reconnecting',()=>{
  console.log('socket re-connecting');
});

socket.on('connect_failed',()=>{
  console.log('socket connect_failed');
});

socket.on('reconnect_failed',()=>{
  console.log('socket reconnect_failed');
});

socket.on('close',()=>{
  console.log('socket close');
});


socket.on('disconnect',()=>{
  console.log('socket disconnect');
  //socket.connect()

});


Object.assign(socket,{

    server:server,
    _initial(){

      this.on('connect',()=>{
        console.log('socket connected');
      });

      this.on('disconnect',()=>{
        console.log('disconnect');


        setTimeout(()=>{
          this.connect();
          this._openListen();
        },1000);

      });

    },

    _openListen(){
      this.on('orders updated',(res)=>{
        alert('socket receipt data from orders updated');
      })
    }


});

export default socket ;
