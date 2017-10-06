// npm install --save good good-console good-squeeze

const good = require('good');

server.route([
    {
        path: '/',
        method: 'GET',
        handler(request, reply) {
            return reply({ message: 'Hapi to see you!' });
        }
    },
    {
        path: '/error',
        method: 'GET',
        handler() {
            throw new Error();
        }
    }
]);

const goodOptions = {
    reporters: {
        consoleLogger: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*',
                    ops: '*',
                    error: '*'
                }]
            },
            {
                module: 'good-console'
            },
            'stdout'
        ]
    }
};

server.register({ register: good, options: goodOptions }, () => {
    server.start(() => { /* .. */ });
});
