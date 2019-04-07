
window.navigator.userAgent = "react-native";

import server from './server';
import io from 'socket.io-client/dist/socket.io';

const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ['websocket'], // you need to explicitly tell it to use websockets
};
const socket = io(server.host);


socket.on('connect',()=>{
  //alert('connected')

});

socket.on('feeds created', function(message) {
  console.log('Got a new Todo!', message);
  alert("socket created okay")
});




Object.assign(socket,{

    server:server

})

export default socket ;
