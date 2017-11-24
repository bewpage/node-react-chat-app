const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');

const app = express();
const server = http.createServer(app);
// const server = http.Server(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../client/build');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connected');

       socket.emit('newMessage', generateMessage('Admin', 'Welcome to the Chat App'));

       socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));


   socket.on('createMessage', (message, callback) => {
       console.log('createMessage', message);
       io.emit('newMessage', generateMessage(message.from, message.text));
       callback('This is from the server.');
   });

   socket.on('disconnect', () => {
       console.log('User is disconnected');
   })
});

server.listen(port, () => {
   console.log(`Started on port ${port}`)
});






