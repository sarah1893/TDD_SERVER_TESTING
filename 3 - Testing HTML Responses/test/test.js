console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/exercises/jsdom-test.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      const foo = '<html><div id="bar">Hello</div><div id="buzz">Hello</div><html>';
      assert.include(parseTextFromHTML(foo, '#bar'), 'Hello'); 
    };
    
    let isMatch = Structured.match(code, structure);
    let failureMessage = "Did you add the text 'Hello' to the `#bar` element in the HTML response?";
    assert.isOk(isMatch, failureMessage);
  });
});