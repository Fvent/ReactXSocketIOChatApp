var express = require('express');
var app = express();
var server = require('http').createServer(app);
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
});
const PORT = 3500 || process.env.PORT;

var numberOfConnections = 0;

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(cors(corsOptions));

mongoose.connect('mongodb://localhost/SimpleAPI', {useNewUrlParser: true, useUnifiedTopology: true});

var userSchema = mongoose.Schema({
    username: String,
    password: String
});

var UserModel = mongoose.model("User", userSchema);

app.get('/', (req,res) => {
    res.send('express server running')
});

app.post('/' ,(req,res) => {
    
});

app.post('/login' , async (req,res) => {
    var payload = req.body;
    console.log(payload);
    var response;

    await UserModel.find({username: payload.username, password: payload.password}, (err, docs) => {
        console.log(docs);
        // response = docs;
        if(docs.length===0){
            res.send("Invalid credentials");
        }
    }).exec();
   
});


io.on('connection', socket => {
    console.log('connection has been made with', socket.handshake.headers.origin);
    
    numberOfConnections++;

    console.log('number of connections ', numberOfConnections);
    socket.on('message', data => {
        console.log(data);
        socket.broadcast.emit('message', data);
    });
    
    socket.on('disconnect', () => {
        console.log('disconnected from origin', socket.handshake.headers.origin);
        numberOfConnections--;
        console.log('number of connections ', numberOfConnections);
    })
});



server.listen(PORT, ()=> {
    console.log(`express server listening on port: ${PORT}`);
})



