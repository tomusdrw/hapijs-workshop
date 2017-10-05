const idSchema = joi.string().token();
const productSchema = joi.object().keys({
    id: idSchema,
    price: joi.number().min(1)
});

server.route({
    method: 'PUT',
    path: '/products/{id}',
    config: {
        validate: {
            headers: true,
            params: {
                id: idSchema.required()
            },
            query: false,
            payload: productSchema
        },
        handler: function (request, reply) {
            // ...
        },
        response: {
            schema: productSchema,
            failAction: 'error',
            sample: 100
        }
    }
});

