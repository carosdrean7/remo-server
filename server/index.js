const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')
const { mongoose } = require('./database')

const nivel_routes = require('./routes/nivel.routes')
const curso_routes = require('./routes/curso.routes')
const actividad_routes = require('./routes/actividad.routes')
const curso_verano_routes = require('./routes/curso-verano.routes')
const datos_routes = require('./routes/datos.routes')
const docente_routes = require('./routes/docente.routes')
const grado_routes = require('./routes/grado.routes')
const libro_routes = require('./routes/libro.routes')
const nosotros_routes = require('./routes/curso.routes')
const persona_administrativa_routes = require('./routes/curso.routes')
const post_routes = require('./routes/curso.routes')


const app = express()
const server  = http.createServer(app)

app.set('port', process.env.PORT || 3000)

app.use(express.json())
app.use(cors({origin: ['https://lapizcero-8938e.firebaseapp.com', 'http://localhost:4200']}))

const io = socketio.listen(server)
require('./sockets')(io)

app.use('/niveles', nivel_routes)
app.use('/cursos', curso_routes)
app.use('/actividades', actividad_routes)
app.use('/curso-veranos', curso_verano_routes)
app.use('/datos', datos_routes)
app.use('/docentes', docente_routes)
app.use('/grados', grado_routes)
app.use('/libros', libro_routes)
app.use('/nosotros', nosotros_routes)
app.use('/persona-administrativa', persona_administrativa_routes)
app.use('/post', post_routes)


server.listen(app.get('port'), () => {
    console.log('server activos')
})