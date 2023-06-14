const assert = require('chai').assert;
const app = require('../../assert.js')

// Asserting with Chai
describe('Welcome Test', function () {
    it('app should return welcome message', function () {
        assert.equal(app(), "Welcome to your app!");
    });
});