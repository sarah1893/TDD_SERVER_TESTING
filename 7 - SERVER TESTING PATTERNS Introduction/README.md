# Introduction

In general, it is up to the developer to make a judgement call on how in depth to write a test. Every test written adds time to the testing cycle and can require maintenance if changes are made to the server behavior. For example, extensively testing failure cases at the feature level might be more than is needed if the error behavior can be fully tested and described at the server level.

As you develop an application, you may realize that you can replace feature tests or reduce them with equal coverage at a lower level. One question to ask when deciding between a full feature test versus a server test is:

“Is it worth trading a slow feature test for a faster server test that doesn’t test the UI?”

Based on the context of the different levels of testing, you should aim to pick the set of tests that gives you the best combination of reliable, complete and fast tests.

In this lesson, you will use server-level testing technologies to test-drive the development of an Express server.

Server tests often provide feedback in terms of HTTP domain concepts, like status codes, header keys and values, and the content of the response body. Let’s take a look at a feature-level test and compare it to a corresponding server test in **messages-test.js** to the right:
```javascript
describe('posting a message', () => {
    it('saves the message with the author information', () => {
     const author = 'user name';
     const message ='feature testing with TDD makes me feel empowered to create a better workflow';

      browser.url('/');
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      browser.click('input[type=submit]');

      assert.include(messagesText(), message);
      assert.include(messagesText(), author);
    });

    });
  });
```

When such a test fails due to a non-existent server implementation, the developer needs to dive into the server level and begin the TDD process to drive the server solution.

## Instructions

1. In the panel to the right, there is a corresponding server test to illustrate the differences between feature and server level tests. Compare the ``describe`` block to the feature test above — what’s different?

When you are ready to move on, check your work.

> Hint
The main difference is that we are not using the browser component to test anything. Assertions are directly using the server request and responses.

