// npm install --save lout
const lout = require('lout');
server.register({ register: lout }, () => {
    server.start(() => { /* .. */ });
});

// OR npm install --save hapi-swagger
const hapiSwagger = require('lout');
server.register({ register: hapiSwagger }, () => {
    server.start(() => { /* .. */ });
});


// ROUTE CONFIG
server.route({
    method: 'GET',
    path: '/products/{id}/',
    config: {
        handler() { /* */},
        description: 'Get a product',
        notes: 'Returns a product by the id passed in the path',
        tags: ['api'],
        validate: {
            params: {
                id : Joi.string()
                    .token()
                    .required()
                    .description('The id for the product. Can only contain a-z, A-Z, 0-9, and underscore')
            }
        }
    }
})
