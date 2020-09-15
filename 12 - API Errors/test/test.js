console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/routes/messages-test.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      it('renders an error message', async () => {
        const message = 'Server Testing'

        const response = await request(app)
          .post('/messages')
          .send({message})
				assert.equal(JSON.parse(response.text).message, "Every message requires an author")
        })
    };
    let structure2 = function() {
      it('renders an error message', async () => {
        const message = 'Server Testing'

        const response = await request(app)
          .post('/messages')
          .send({message})
				assert.equal("Every message requires an author", JSON.parse(response.text).message)
        })
    };

    let isMatch = Structured.match(code, structure);
    isMatch = isMatch || Structured.match(code, structure2);
    let failureMessage = 'Did you use `assert.equal()` to verify that `JSON.parse(response.text).message` is equal to "Every message requires an author"?';
    assert.isOk(isMatch, failureMessage);
  });
});