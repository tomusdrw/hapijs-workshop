/* /LIB/AUTHENTICATION.JS */
exports.register = (server, options, next) => {

    server.auth.strategy(
        'simple-authentication',
        'basic',
        false,
        {
            validateFunc(request, username, password, cb) {
                /* ... */
                cb(null, isAuthenticated, userCredentials)
            }
        }
    );

    next();
};

export.register.attributes = {
    name: 'auth',
    dependencies: 'hapi-auth-basic'
};

/* MANIFEST */
"registrations": [
    {
        "plugin": "hapi-auth-basic"
    },
    {
        "plugin": "./lib/authentication"
    },
    /* ... */
]

/* ROUTE CONFIG */
server.route({
    method: 'GET',
    path: '/',
    auth: 'simple-authentication',
    handler(request, response) {
        /* ... */
    }
});
