# Summary

We used several technologies to write tests for both “happy” and “sad” paths of:
- Server status codes
- Server response content
- Error cases

We also saw how TDD can be used at the server level to guide the implementation of the server code:
- We wrote a failing test
- We wrote the minimal required server code to pass the test
- When we decided or needed to refactor to meet external requirements, we used the existing tests to make sure our refactored code maintained the same end behavior

## Instructions

1. In this course we moved from the feature level to the server level for our TDD approach. When working with persistent data, you will need to continue down the stack to the model layer. We’ve updated the test from the initial exercise in **messages-test.js** to the right.

Again, we are checking that a valid message is saved. However, instead of checking the returned page contains the new message, we are checking the message is saved to the database layer.

Run the test using ``npm test``.

This test fails, since we have not yet implemented the model layer, which is our next step as a developer.