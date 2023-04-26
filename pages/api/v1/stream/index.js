import { Server } from 'socket.io';
import { v4 as uid } from 'uuid';

const ioConfig = {
    cors: {
        origin: 'http://localhost',
        methods: ['GET', 'POST'],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
}

export default function any(req, res) {
    
    if (res.socket.server.io) {
        res.end();
        return;
    }

    const io = new Server(res.socket.server, ioConfig);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
        socket.on('onStream', (message) => {
            socket.broadcast.emit('onReceiveStream', message);
        });
        
        socket.on('onExit', (message) => {
            socket.broadcast.emit('onExitStream', message);
        });
    });

    res.end();
}

