# API Errors

As mentioned earlier, one of the use cases for server testing is for checking API responses, especially the “sad path” where a user interacts with the server in an unexpected or disallowed manner. We need to make sure our server properly handles invalid passwords, form field errors, etc.

Ensuring the app is designed to withstand these issues and that the error interactions are well bounded is important.

Keep in mind that while there may only be one “happy path” for an interaction (user submits a valid password), there can be many corresponding “sad paths” (password is too short, doesn’t contain special characters, etc). By testing the majority of these on the server level, it saves us from testing them at a more resource intensive level including the user view.

## Instructions

1. We’ve added a new route to our application. It allows users to POST a message. After this, the user should be redirected to ``'/'``. There is a passing assertion that handles this “happy path”.

We need to check the “sad path” where a user provides insufficient inputs.

We have started a test in **messages-test.js** to check the server responds with an error message when a submission does not contain an author.

Add an assertion to verify the server responds to this case with a status code of 400 (Bad Request).

Run the test using ``npm test``.

When you are ready to move on, check your work.

> Hint
> Use **``assert.equal``** to check that the **``response.status``** is equal to 400. Note that the test will fail - this is ok!

2. The test is failing since we have not implemented this behavior yet. Within **messages.js** uncomment the code block that responds with the 400 response.

Verify the test now passes using ``npm test``.

When you are ready to move on, check your work.

> Hint
> Uncomment the whole block in **messages.js** that is commented out.

3. Let’s make sure the server responds with an appropriate error message as well. Add an assertion to our test to verify the server is responding with a ``message`` of ‘Every message requires an author’.

Note that this API is returning JSON, so you will access the message content using:

``JSON.parse(response.text).message``

Run the test using ``npm test``. This should fail since we have not implemented the correct response.

When you are ready to move on, check your work.

> Hint
> Use ``assert.equal()`` to check that ``JSON.parse(response.text).message`` is equal to ‘Every message requires an author’.

4. The test is in the red. Add the correct string (‘Every message requires an author’) to the response in **messages.js**.

Run the test again using ``npm test``.

When you are ready to move on, check your work.

> Hint
> Add ‘Every message requires an author’ as the JSON message text within the **``res.send()``** in **messages.js**:
> ``{ message: 'Every message requires an author'}``