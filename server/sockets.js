module.exports = function (io) {
    io.on('connection', socket => {
        console.log('new user connceted')
        // aqui tienen que ir todas las creaciones y emitirlas y debemos crearlas directamente desde aqui
    })
}