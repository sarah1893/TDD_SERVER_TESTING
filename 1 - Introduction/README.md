# Introduction

When testing an application, feature tests expose required tests or implementations at different levels of the application technology stack. One of those levels is the backend server.

Server tests are used to test the server response only, not any front-end rendering of code or user interactions. We “disconnect” the browser and interact directly with the server using requests. The tests define the expected behavior of the interactions and check the actual responses against what we expect.

Server tests are commonly used to test API responses, but we also use server tests for any server response that our application relies on. This can include checking status codes and error messages.

In this lesson, we introduce a suite of technologies and concepts for performing testing on a JavaScript-based server. These include Chai, jsdom, and SuperTest. We also review how to use async/await for asynchronous calls. When adapting this to your project, it needs to be tailored to match the specific technology stack for your project.

## Instructions

1. In the pane to the right, **user-visits-root-test.js** is pre-populated with feature-test code. Run the test by typing ``npm test`` in the terminal.

When you are ready to move on, check your work.

> Hint
> Type **``npm test``** in the terminal.

2. The test is currently failing — the test is attempting to verify that a message is being saved, but this behavior is not implemented by the server yet. This guides us to implement the code for a desired behavior.