console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/routes/index-test.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      it('returns the correct content', async () => {
        const response = await request(app)
          .get('/')
          .send()
        console.log(response.text)
    	})
    };

    let isMatch = Structured.match(code, structure);
    let failureMessage = 'Did you use `async` before the `() =>` and `await` before `request(app)`?';
    assert.isOk(isMatch, failureMessage);
  });
});