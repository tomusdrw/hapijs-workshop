// npm install --save blipp
const blipp = require('app/presentation/module02/blipp');

server.route([
    {
        method: 'GET',
        path: '/',
        config: {
            description: 'The homepage',
            /* ... */
        }
    },
    { /* ... */ }
]);

server.register(blipp, () => {
   server.start(/*...*/)
});
