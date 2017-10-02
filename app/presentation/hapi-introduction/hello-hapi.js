const hapi = require('hapi');

const server = new hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply('Hapi to see you!\n');
    }
});

server.start(() => {
    console.log(`Server running at ${server.info.uri}`);
});
