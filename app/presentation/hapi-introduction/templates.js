// npm install vision ejs --save

/** INDEX.JS **/

const hapi = require('hapi');
const vision = require('vision');
const ejs = require('ejs');

const server = new hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(vision, () => {

    server.views({
        engines: { ejs },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            return reply.view('index', { message: 'Hapi to see you!' });
        }
    });

    server.start(() => {
        console.log(`Server running at: ${server.info.uri}`);
    });
});


/** VIEWS/INDEX.EJS **/
<h1><%= message %></h1>
