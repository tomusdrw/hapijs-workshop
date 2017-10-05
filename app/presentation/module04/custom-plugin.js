/* /LIB/PRODUCTS.jS */
exports.register = (server, options, next) => {
    server.route({
        method: 'GET',
        path: '/',
        description: 'Index route',
        /* ... */
    });

    server.route({
        method: 'GET',
        path: '/{id}',
        description: 'Fetch route',
        /* ... */
    });

    /* ... */
    next();
};

exports.register.attributes = {
    name: 'Product routes'
};

/* /MANIFEST.JS */
module.exports = {
    "connections": [/* ... */],
    "registrations": [
        /* ... */,
        {
            "plugin": "./lib/products",
            "options": {
                "routes": {
                    "prefix": "/products"
                }
            }
        }
    ]
};

/* /LIB/SERVER.JS */
const glue = require('glue');
const manifest = require('../manifest');

const options = { relativeTo: __dirname };

module.exports = glue.compose(manifest, options);
