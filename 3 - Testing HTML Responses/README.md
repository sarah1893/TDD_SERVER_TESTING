# Testing HTML Responses

Our back-end server is serving dynamic HTML to the user. For the homepage, this is located in the **jsdom-test.js** file to the right. It is possible to use ``.include()`` to verify that the HTML response contains certain Strings, but gets cumbersome to verify the hierarchical relationships of DOM elements.

We can use the jsdom library to improve this type of assertion. It allows us to select elements of the DOM and check relationships and content. To increase the readability of our tests, we abstracted the jsdom functionality into a custom function, ``parseTextFromHTML``:
```javascript
const parseTextFromHTML = (htmlAsString, selector) => {
  const selectedElement = jsdom(htmlAsString).querySelector(selector);
  if (selectedElement !== null) {
    return selectedElement.textContent;
  } else {
    throw new Error(`No element with selector ${selector} found in HTML string`);
  }
};
```

This function takes the HTML response as a string and the desired selector as inputs and returns the ``textContent`` of the corresponding element. If no element is found, it will return a TypeError.

## Instructions

1. In the panel to the right, **jsdom-test.js** is prepopulated with code to test that the string “Hello” is contained within the HTML response. Run the test by typing ``npm test`` in the terminal and observe it pass.

When you are ready to move on, check your work.

> Hint
> Type **``npm test``** in the terminal to the right and press enter.

2. Change the existing assertion to use ``parseTextFromHTML`` and assert that the string “Hello” is contained in the ``#bar`` element. The first argument should be the HTML string, ``foo`` and the second argument should be the selector, ``'#bar'``. Run the test using ``npm test``.

When you are ready to move on, check your work.

> Hint
> Pass the HTML string **``foo``** as the first argument into **``parseTextFromHTML``** and **``'#bar'``** as the second argument. Assert that this returns the string **``"Hello"``**.

3. Modify the HTML string ``foo`` to include the string “Hello” in the ``#bar`` element (in addition to the ‘#buzz’ element) to pass the test. Run the test using ``npm test`` to verify it passes.

When you are ready to move on, check your work.

> Hint
```javascript
const foo = '<html><div id="bar">Hello</div><div id="buzz">Hello</div><html>';
```