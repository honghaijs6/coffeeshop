
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

Object.assign(socket,{
    server:server,
});

export default socket ;
