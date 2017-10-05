// npm install inert --save

const path = require('path');
const hapi = require('hapi');
const inert = require('inert');

const server = new hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(inert, (err) => {

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: path.join(__dirname, 'public'),
                listing: true
            }
        }
    });

    server.start((err) => {
        console.log(`Server running at: ${server.info.uri}`);
    });
});
