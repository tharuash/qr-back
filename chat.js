const http = require('./app')
const io = require('socket.io')(http)

io.on('connection', (socket) => {  
    console.log('a user connected'); 
});

var onlineUsers = []
io.on('connection', async function (socket) {
   
    socket.on("user_connected", function (userId) {
        
        users[userId] = socket.id;
  
        io.emit("user_connected", userId);
    });
})

module.exports = onlineUsers