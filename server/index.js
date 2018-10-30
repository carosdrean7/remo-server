const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const { mongoose } = require('./database')
const nivel_routes = require('./routes/nivel.routes')

const app = express()
const server  = http.createServer(app)

app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(cors({origin: ['https://lapizcero-8938e.firebaseapp.com', 'http://localhost:4200']}))

const io = socketio.listen(server)
require('./sockets')(io)

app.use('/niveles', nivel_routes)

server.listen(app.get('port'), () => {
    console.log('server activos')
})