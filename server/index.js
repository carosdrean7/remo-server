const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const { mongoose } = require('./database')
const user_routes = require('./routes/user.routes')

const app = express()
const server  = http.createServer(app)

app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(cors({origin: ['https://lapizcero-8938e.firebaseapp.com', 'http://localhost:4200']}))

const io = socketio.listen(server)
require('./sockets')(io)

app.use('/users', user_routes)

server.listen(app.get('port'), () => {
    console.log('server activos')
})