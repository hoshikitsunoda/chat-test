const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg)
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})
