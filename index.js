
const express = require('express'); // una constante llamada exprrees

const path = require('path');//ruta publica 
require('dotenv').config();

//App Express
const app = express();//voy a crear una aplicacion, Inicaliza y estoy listo para escuchar peticiones


//////////////////////////////// //////////////////////////////////

//USAREMSO SOCKERT.IO
//Node Server: :: : :CREAREMOS UN SERVIDOR DE SOCKET
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

//llamamos elarchivos socket.js

require('./sockets/socket');

////////////////////////////////////////////////////////////////





const publicPath = path.resolve(__dirname, 'public');//aputan a donde sea que esta mi servidor , nombre de dominio, etc.

app.use(express.static(publicPath));



server.listen(process.env.PORT, (err) => {// empezamos a escucahr peticiones por un algun puerto. y llamamos un colback que llame el error. por si el puerto esta ocupado.
    if (err) throw new Error(err); {
        console.log('Servidor corriendo en puerto-!!!', process.env.PORT);
    }
});
