# SuperTest

As you may have noticed in the previous exercise, we are using the function ``request`` to make server calls to support our tests. This is actually a reference to the SuperTest library:
```javascript
const request = require('supertest');
```

This library was specifically designed for testing Node server responses and integrates well with Mocha and Chai. To use SuperTest, we pass the ``app`` object from our app into the ``request`` function. To make a GET request, we use ``.get()`` with the desired route as the argument:
```javascript
await request(app)
          .get('/')
          .send();
```

It is also possible to perform a POST using SuperTest. We chain any desired properties or inputs to the HTTP call, and use ``.send()`` to make the request:
```javascript
await request(app)
          .post('/messages')
          .type('form')
          .send({author, message});
```

## Instructions

1. In the pane to the right, there is the start to a server test on the root document of our site. Chain the ``.get()`` method at the end of the request. Pass the appropriate argument to get the root object of our app (``'/'``).

Run ``npm test`` to verify the server response is being printed to the console.

When you are ready to move on, check your work.

> Hint
> Append **``.get('/')``** to the end of **``.request(app)``**

