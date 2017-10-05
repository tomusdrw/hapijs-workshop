/* /MANIFEST.JSS */
module.exports = {
    "connections": [
        {
            "port": 3000,
            "host": "localhost"
        }
    ],
    "registrations": [
        {
            "plugin": "inert"
        },
        {
            "plugin": "vision"
        }
    ]
};

/* /LIB/SERVER.JS */
const glue = require('glue');
const manifest = require('../manifest');

module.exports = glue.compose(manifest);

/* /INDEX.JS */
const Server = require('./lib/server');

Server.then((server) => {
    server.route(/* ... */);

    server.start().then(() => {
        console.log(`Server running at ${server.info.uri}`);
    });
});
