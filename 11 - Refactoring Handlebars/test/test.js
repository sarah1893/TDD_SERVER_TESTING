console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('routes/profile.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      router.get('/:username', (req, res) => {
          const username = req.params.username
          res.render('profile', { username })
      })
    };

    let isMatch = Structured.match(code, structure);
    let failureMessage = 'Did you replace `res.send()` with `res.render()`?';
    assert.isOk(isMatch, failureMessage);
  });
});