// npm install --save blipp
const blipp = require('blipp');

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
