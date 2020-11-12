const http = require('./app')
const io = require('socket.io')(http)

io.on('connection', (socket) => {  
    console.log('a user connected'); 
});

var onlineUsers = []
io.on('connection', async function (socket) {
    // attach incoming listener for new user
    socket.on("user_connected", function (userId) {
        // save in array
        users[userId] = socket.id;

        // socket ID will be used to send message to individual person

        // notify all connected clients
        io.emit("user_connected", userId);
    });
})

module.exports = onlineUsers