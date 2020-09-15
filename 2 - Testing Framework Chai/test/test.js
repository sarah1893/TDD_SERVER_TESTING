console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/exercises/chai-test.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      const includedNumber = 4
      assert.include(foo, includedNumber)
      const fooPop = foo.pop()
      assert.equal($alice, $bob)
      assert.equal(foo.length, 0)
    };
    let structure2 = function() {
      const includedNumber = 4
      assert.include(foo, includedNumber)
      const fooPop = foo.pop()
      assert.equal($alice, $bob)
      assert.equal(0, foo.length)
    };
   
   
    let isMatch = Structured.match(code, structure);
    let isMatch2 = Structured.match(code, structure2);
    let failureMessage = 'Did you use `assert.equal()` to compare `foo.length` and `0`?';
    assert.isOk(isMatch || isMatch2, failureMessage);
  });
});