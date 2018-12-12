This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

A demonstration of unexpected lost input cursor position on input elements with asynchronous updates to their values.

### Set up

In project directory, run `yarn start` or `npm start`.

### Symptom

After a new browser window is open, type a string into the input field, and then move the cursor to the middle of the string. Any change on the string including backspace or type in new characters will result in the cursor being auto moved by react to be after the string, and if want to make multiple changes this is really unwanted behavior.

## Learn More

To learn about how to fix the behavior and the root cause of the problem, check out my Medium post [Bugs of Week 11/19/2018 - Jumping Cursor](https://medium.com/@wangtjwork/bugs-of-week-11-19-2018-jumping-cursor-5c7431e7532b).
