# Refactoring: Route Parameters

In the previous exercise, we checked that the server responded with a specific message. On our home page, the title is constant for everyone, “Messaging App”.

What if we want to create a profile page that is customized for each user?

A straightforward implementation would be to generate hard coded routes for every single user of our app. Think: ``'welcome/alice' => '<h1>Your Name is alice</h1>', 'welcome/bob' => '<h1>Your Name is bob</h1>'``, etc.

Hopefully if you see repetitive code like this, you’ll have an urge to refactor it to something more elegant using a variable route parameter. This allows us to put any username into the url and have the server generate the appropriate response. Think: ``'welcome/:username' => '<h1>Your Name is ' + req.params.username +'</h1>'``.

If you are using the red, green, refactor approach, you will start with a set of passing (“green”) assertions for the section of code you are looking to improve. With the current behavior captured, you can begin refactoring, knowing that your tests will “catch” you by turning red if you miss something in your approach.

## Instructions

1. In **profile.js** to the right, we have an implementation to provide customized profile messages for each of our users (alice and bob). Through TDD, we also have a set of assertions in **profile-test.js** to verify we are providing the correct messages to each user.

Run ``npm test`` to verify we are green.

When you are ready to move on, check your work.

> Hint
> Type ‘npm test’ in the terminal to run the tests.

2. In **profile.js**, replace the string ``'/alice'`` in the first profile route with ``'/:username'`` to make the username available as a variable.

Run ``npm test`` to see how this affected our test.

When you are ready to move on, check your work.

> Hint
> Replace ``'/alice'`` with ``'/:username'`` in **index.js**.

3. Our test is now failing. Edit the welcome message in the route to use the username variable (``req.params.username``) instead of the hard-coded “alice”.

Run ``npm test`` to verify we’re back in the green.

When you are ready to move on, check your work.

> Hint
> Use string concatenation to replace alice with the username variable in the response.

4. Remove the second profile route for bob now that we have a variable route doing the work for us.

Run ``npm test`` to verify we are still green.

When you are ready to move on, check your work.

> Hint
> Delete the route for bob within **profile.js**.

5. At this point, you may decide to delete one of the tests (alice, bob), since the implementation is now dependent on the name as a variable only. This decision depends on the balance between the time your tests take and the cost of missing a potential corner case.

When you are ready to move on, check your work.