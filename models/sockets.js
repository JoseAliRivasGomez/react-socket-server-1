

class Sockets {

    constructor(io){
        this.io = io;

        this.socketEvents();
    }

    socketEvents(){

        this.io.on('connection', (socket) => { 

            socket.on('mensaje-a-server', (data) => {
                console.log(data);
        
                this.io.emit('mensaje-de-server', data);
            });
        
        
        
            //console.log('Dispositivo cliente conectado');
            //console.log(socket.id);
        
            // socket.emit('mensaje-bienvenida', {
            //     msg: 'Bienvenido al servidor',
            //     fecha: new Date(),
            // });
        
            // socket.on('mensaje-cliente', (data) => {
            //     console.log(data);
            // });
        
        
        
        });

    }

}

module.exports = Sockets;