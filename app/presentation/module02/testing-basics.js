// npm install lab --save-dev


/* TEST/INDEX.JS */

const { expect, test, experiment } =
    exports.lab =
    require('lab').script();

experiment('Hapi to', () => {
    test('be sane', (done) => {
        expect(true).to.be.true();
        done();
    });
});
