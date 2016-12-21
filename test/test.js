var typeOf = require('../index');
var assert = require('assert');

describe('#type of', function() {
    var varNull = null;
    var varUndefined = undefined;
    var varArray = [1, 2];
    var varNumber = 12.34;
    var varNAN = NaN;
    var varObject = {};
    var varFunction = function(){};
    var varBoolean = true;
    var varString = '';
    var varRegexp = /a-z/;
    var varError = new ReferenceError;
    var varDate = new Date;
    var varMath = Math;
    it('null', function() {
        assert.equal('null', typeOf(varNull));
    });
    it('undefined', function() {
        assert.equal('undefined', typeOf(varUndefined));
    });
    it('array', function() {
        assert.equal('array', typeOf(varArray));
    });
    it('number', function() {
        assert.equal('number', typeOf(varNumber));
    });
    it('NaN', function() {
        assert.equal('number', typeOf(varNAN));
    });
    it('object', function() {
        assert.equal('object', typeOf(varObject));
    });
    it('function', function() {
        assert.equal('function', typeOf(varFunction));
    });
    it('boolean', function() {
        assert.equal('boolean', typeOf(varBoolean));
    });
    it('string', function() {
        assert.equal('string', typeOf(varString));
    });
    it('regexp', function() {
        assert.equal('regexp', typeOf(varRegexp));
    });
    it('error', function() {
        assert.equal('error', typeOf(varError));
    });
    it('date', function() {
        assert.equal('date', typeOf(varDate));
    });
    it('math', function() {
        assert.equal('math', typeOf(varMath));
    });
});
