const { replaceNumber } = require('../replaceNumber');

const { describe, it } = require('mocha');
const assert = require('assert');
const { NullNumberException } = require('../numberException');

describe('Test', function () {
    describe('#replaceNumber()', function () {
        it('should return fizz when the value is divisible by 3', function () {
            assert(replaceNumber(3) === ('fizz'));
        });
        
        it('should return buzz when the value is divisible by 5', function () {
            assert(replaceNumber(5) === ('buzz'));
        });

        it('should return fizzbuzz when the value is divisible by 3 and 5', function () {
            assert(replaceNumber(15) === ('fizzbuzz'));
        });

        it('should return the value when it is not divisible by 3 nor 5', function () {
            assert(replaceNumber(7) === (7));
        });

        it('should return NullNumberException when the value is null', function () {
            assert.throws(() => { replaceNumber(null) }, NullNumberException, 'Null number found');
        });
    });
});