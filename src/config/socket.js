
import server from './server';
import io from 'socket.io-client/dist/socket.io';
const socket = io(server.host);


Object.assign(socket,{
    
    server:server
    
})

export default socket ; 