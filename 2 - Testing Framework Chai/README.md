# Testing Framework: Chai

When writing tests, sometimes you’ll find that the tests require calculation steps or inline code to determine if the test is passing. For example, to test if an array ``foo`` includes an element ``bar`` using Mocha with the built-in Node assertion library, we use the JavaScript ``includes`` helper:
```javascript
assert.ok(foo.includes(bar));
```

To improve the readability and flow of our tests, we extend the built-in Node assertion library with Chai.
```javascript
const {assert} = require('chai');
```

The main function in Chai we are using is ``.include()``. This allows us to rewrite the previous example as:
```javascript
assert.include(foo, bar);
```

Include also works to check that text contains certain values:
```javascript
assert.include('foobar', 'bar'); // Evaluates to true
```

The large set of assertion methods in the chai library enable us to write more expressive tests that are easy for developers to understand.

## Instructions

1. In **chai-test.js** to the right, we’ve included Chai at the top of the file and set up a describe block with Mocha. Use Chai on line 9 to assert that the ``foo`` array contains the number 4. Use ``npm test`` to verify the test is passing.

When you are ready to move on, check your work.

> Hint
> Use ``assert.include()``. First argument is where you are looking (``foo``) and the second is what you are looking for (``includedNumber``).

2. In JavaScript, the ``.pop()`` method removes the final element from an array and returns it. Write an assertion to verify that the variable ``fooPop`` returned from the ``.pop()`` method returns the correct element from the array. Use ``npm test`` to verify the test is passing.

When you are ready to move on, check your work.

> Hint
> Use ``assert.equal()`` to check that ``fooPop`` is equal to ``includedNumber``. Be sure to use ``fooPop`` as the first argument.

3. Since we popped the only element from the array, foo should be empty. To check this, assert that the length of foo is now zero. Use ``npm test`` to verify the test is passing.

When you are ready to move on, check your work.

> Hint
> Use ``assert.equal()`` to check that ``foo.length`` equals 0.