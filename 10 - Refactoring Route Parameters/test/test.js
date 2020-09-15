console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('routes/profile.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      router.get('/:username', (req, res) => {
          res.send('<h1 id="welcome-message">Welcome ' + req.params.username + '!</h1>');
      });

    };

    let isMatch = Structured.match(code, structure);
    let failureMessage = "Did you replace `alice` in the response string with `' + req.params.username + '`?";
    assert.isOk(isMatch, failureMessage);
  });
});