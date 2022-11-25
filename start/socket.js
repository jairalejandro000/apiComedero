'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/
const Ws = use('Ws')

Ws.channel('raspberry', ('RaspberryController'))

const Server = use('Server')
const io = use('socket.io')(Server.getInstance())

io.sockets.on('connection', newConnection)

function newConnection(socket){
    console.log('new connection ', socket)
}