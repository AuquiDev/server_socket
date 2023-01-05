
const {io} = require('../index');

//Mensajes de Sockets: COMUNICACION POR SOCKEt
io.on('connection', client => { // el cliente var una computadora que se acaba de conectar a mi dispositivo.
    
    console.log('Cliente Conectado');

    client.on('disconnect', () => { console.log('Cliente desconectado'); });

    client.on('mensaje',(payload)=>{
        console.log('Mensaje',payload);

        io.emit('mensaje',{admin: 'Mensaje de administrador 01'});
    });
});