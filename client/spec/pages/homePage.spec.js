const HomePage = require('../../src/js/pages/homePage');

describe('HomePage', () => {
    it('should have a template', () => {
        const page = new HomePage();
        expect(page.template()).toContain("<title>Calculator</title>");
    });
});