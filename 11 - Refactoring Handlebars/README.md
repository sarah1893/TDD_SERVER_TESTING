# Refactoring: Handlebars

Sometimes during the reflection of the refactor phase, you will realize that you can implement something better or more efficiently. In the code so far, we have been responding with inline HTML strings. On a large project, this could make it difficult for the front end developer to organize and maintain.

An improved approach to this is using a templating library like Handlebars to separate the HTML view from the JavaScript controller.

In the web app that you’ve built in this lesson, we’ve placed the templates in the ``/views`` folder and have an extension of ``.handlebars``. Our controller will now use ``render`` to create the view and pass in any variables:
```javascript
const param = 'Foo';
res.render('templateName', {param});
```

The templates are written like regular HTML, but variables can be accessed within the view using double curly braces:
```html
<h1>{{ param }}</h1>
```

When the view is rendered, it will replace ``{{ param }}`` with its actual value:
```html
<h1>Foo</h1>
```

## Instructions

1. Consider the previous profile page route implementation in **profile.js** to the right.

Check the existing code using ``npm test``.

When you are ready to move on, check your work.

> Hint
> Use **``npm test``** to run the tests.

2. We’ve added a blank view called **profile.handlebars** in the ``views`` folder.

Copy this HTML response into that file: ``<h1 id="welcome-message">Welcome {{ username }}</h1>``.

When you are ready to move on, check your work.

> Hint
> Copy **``<h1 id="welcome-message">Welcome {{ username }}</h1>``** into **``views/profile.handlebars``**

3. Update the response in **profile.js** to use the newly created view and pass in the username. Use ``res.render()`` with the name of the view, ``'profile'`` as the first argument, and the username as the second variable, ``{username}``.

Run the test using ``npm test``.

When you are ready to move on, check your work.

> Hint
> Remove the existing **``res.send()``** in **profile.js** and replace it with **``res.render()``,** passing **``'profile'``** and **``{username}``**.

4. It looks like our test caught a small error in our new implementation — can you fix it?

Run ``npm test`` to verify it is in the green now.

When you are ready to move on, check your work.

> Hint
> There is an exclamation point missing from the end of the response.