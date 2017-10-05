/* LIB/SERVER.JS */
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply('Hapi to see you!\n');
    }
});

module.exports = server;

/* TESTS/LIB/SERVER.JS */

const server = require('../lib/server');
const { expect, test, experiment } = exports.lab = require('lab').script();

experiment('Route: /', () => {
    test('responds with 200', (done) => {
        server.inject({ method: 'GET', path: '/' }, (res) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});
