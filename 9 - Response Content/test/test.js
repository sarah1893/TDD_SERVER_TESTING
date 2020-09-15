console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('routes/index.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      router.get('/', (req, res) => {
          res.send('<h1 id="page-title">Messaging App</h1>')
      })
    };

    let isMatch = Structured.match(code, structure);
    let failureMessage = "Did you pass the desired string as the argument to `res.send()` in **index.js**?";
    assert.isOk(isMatch, failureMessage);
  });
});