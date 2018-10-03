const routes = require('../src/js/routes');

describe('routes', () => {

    it('all routes should exist', () => {
        expect(routes['/']).toBeDefined();
    });

});