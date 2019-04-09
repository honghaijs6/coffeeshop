
window.navigator.userAgent = "react-native";

import server from './server';
//import io from 'socket.io-client/dist/socket.io';
import io from 'socket.io-client';



const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ['websocket'], // you need to explicitly tell it to use websockets
};
const socket = io(server.host,connectionConfig);
Object.assign(socket,{

    server:server

})

export default socket ;
