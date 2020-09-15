# Response Content

In the previous exercise, we checked that the server responded with specific status codes. Now we need to make sure the server is responding with the correct content. Specifically, we are looking at HTML responses that are rendered by the front-end.

Many servers return dynamic HTML content based on the user, the URL accessed, header values, and more. We use TDD to ensure the server responds correctly for each case. When designing our tests, it is important to consider both the intended and unintended user behavior.

We can organize our tests into two categories:
- tests that exercise the “Happy Path” — expected use cases of our application
- tests that exercise the “Sad Path” — unexpected or invalid use of our application

For our tests, once we retrieve the response from the server, we use ``assert.include()`` from the Chai library to check the response.

As an example, after requesting a valid profile page for “My Name”, you may receive the following response content:
```javascript
response.text = '<div><div id="my-name">My Name</div></div>';
```

You can retrieve the content of ``#my-name`` and check it using the following:
```javascript
assert.include(parseTextFromHTML(response.text, '#my-name'), "My Name"); //True
```

We could also write a separate test to check the corresponding “sad path”. Perhaps there is not yet a page for “Your Name”, so you should not receive a response containing similar HTML. We use ``.notInclude()`` to verify that the response is **not** including “Your Name” :
```javascript
assert.notInclude(parseTextFromHTML(response.text, '#my-name'), "Your Name"); //True
```

Note that here we are identifying the HTML elements by their ID using our ``parseTextFromHTML()`` helper but you can use any selectors supported by the jsdom library. This helper is returning the text content of the corresponding HTML element only, but you could write a separate helper for accessing other attributes.

## Instructions

1. We want our home page (at ``'/'``) to contain an ``<h1>`` element with an id of ``#page-title``. It should say ‘Messaging App’. Add an assertion within the “correct title” test using the ``parseTextFromHTML()`` helper to check the response.

Run the test with ``npm test``. It will fail, but that’s what we want!

When you are ready to move on, check your work.

> Hint
> Use **``assert.equal``** to check the text returned from **``parseTextFromHTML()``**.
> Make sure to use **``response.text``** to access the text of the response for the first argument.

2. Within **index.js**, implement the correct response using res.send() and the intended content ('``<h1 id="page-title">Messaging App</h1>'``) to change this test from red to green.

Run the test with ‘npm test’.

When you are ready to move on, check your work.

> Hint
> Pass the intended content as the argument to **``res.send()``**.