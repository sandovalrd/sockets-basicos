module.exports = io => {

    io.on('connect', (client) => {
        console.log('Usuario', client.id, 'Conectado!');
        client.on('disconnect', () => {
            console.log('Usuario Desconectado!');
        });

        client.on('enviarMensaje', (mensaje, callback) => {
            console.log(mensaje);
            // if (mensaje.nombre) {
            //     callback({ respuesta: 'Llego el nombre' });
            // } else {
            //     callback({ respuesta: 'No vino el nombre' });
            // }
            // emite a todos los clientes
            client.broadcast.emit('enviarMensaje', mensaje);
        });

        client.emit('enviarMensaje', {
            nombre: 'Servidor',
            mensaje: 'Bienvenido a la app!'
        });

    });
}