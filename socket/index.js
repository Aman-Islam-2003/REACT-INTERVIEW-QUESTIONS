const express = require('express');
const http = require('http');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

app.use(express.static('/public'));
const io = new Server(server);

io.on("connection", (socket) => {
    console.log(socket.id)
  });

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

server.listen(9000,()=>console.log(`Server is listening on port ${9000}`))