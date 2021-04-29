var express = require('express');
var app = express();
var server = require('http').createServer(app);
var cors = require('cors');
var io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});
const PORT = 3500 || process.env.PORT;

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(corsOptions));

app.get('/', (req,res)=> {
    res.send('express server running')
});

io.on('connection', socket => {
    console.log('connection has been made with', socket.handshake.headers.origin);


    socket.on('message', data => {
        console.log(data);
        socket.broadcast.emit('message', data);
    });
    
    socket.on('disconnect', () => {
        console.log('disconnected from origin', socket.handshake.headers.origin);
    })
});



server.listen(PORT, ()=> {
    console.log(`express server listening on port: ${PORT}`);
})



