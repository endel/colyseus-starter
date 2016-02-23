"use strict";

var colyseus = require('colyseus')
  , http = require('http')

  , express = require('express')
  , app = express()
  , port = process.env.PORT || 3553

  , server = http.createServer(app)
  , gameServer = new colyseus.Server({server: server})

gameServer.register('chat_room', require('./rooms/chat_room'))
server.listen(port);

console.log(`Listening on http://localhost:${ port }`)
