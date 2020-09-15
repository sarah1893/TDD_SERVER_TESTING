# Async / Await

A server typically handles many requests at a time, but may be only capable of processing a subset of the requests concurrently. One side effect of this is that the server response time is neither instant nor predictable. If no other processes are occurring on the server, requests are handled quickly, but if the server is close to full capacity, the request can take a few seconds or even timeout.

We need a way to receive asynchronous responses from the server and then act on them. The async/await pattern introduced in Node 8 helps us write readable descriptions of the behavior of our application which is an important part of writing good tests.

To use this pattern, define the function with the ``async`` keyword. Then, within the function, use the ``await`` keyword in front of the asynchronous function you are calling. For example:
```javascript
const foo = async () => {
  console.log(await someAsyncThing());
  return true;
}

foo();
```

Here, we are waiting for ``someAsyncThing()`` to return before logging the result to the console.

## Instructions

1. In **index-test.js** to the right, there is the start of a server test on the root document of our site. There are no assertions yet, but we are attempting to log the server response to the console. Run the test as is and note that we see an “undefined” response logged to the console. (The ``request`` method is covered in the next exercise)

When you are ready to move on, check your work.

> Hint
> Use **``npm test``** in the terminal to run the test.

2. Update the function to use ``async`` in the function definition and ``await`` for the call to ``request``. Run the tests again using npm test and note the logged response in the console.

When you are ready to move on, check your work.

> Hint
> Add **``async``** ahead of the **``()``** on the line starting with **``it...``** And add **``await``** before **``request(app)``**.