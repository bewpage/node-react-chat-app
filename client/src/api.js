import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001');
// const socket = openSocket("https://bew-node-chat-app.herokuapp.com/");


socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected to server');
});


const createMessage = (message) => {
    socket.emit('createMessage', message,
        (data) => {
        console.log('Got it!', data, message);
    });

};

const receivedMessage = (callback) => {
    socket.on('newMessage', (message) => {
        callback(message)
      });
};



export { createMessage, receivedMessage };