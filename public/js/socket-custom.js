  // on escucha y emit envia
  var socket = io();

  socket.on('connect', function() {
      console.log('Conectado al servidor');
  });

  socket.on('disconnect', function() {
      console.log('Desconectado del servidor');
  });

  socket.emit('enviarMensaje', {
      nombre: 'Rafael Sandoval',
      mensaje: 'Hola Mundo'
  }, function(resp) {
      console.log('se disparo el callback!');
      console.log('Respuesta del servidor', resp);
  });

  socket.on('enviarMensaje', function(mensaje) {
      console.log(mensaje);
  });