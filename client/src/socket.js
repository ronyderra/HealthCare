import { io } from 'socket.io-client';

const socket = io('http://localhost:4000/');

socket.on('connect', () => {
    console.log('client connected to socket', socket.id)

})

export default socket;