# Currency converter

## Currency calculator

![Currency converter in React - Presentation](public/img/introduction.gif)

It is a currency calculator that is used to convert the PLN currency value to such currencies as:
EUR, USD, GBP and other. Exchange rate tables is downloaded from the website: <https://api.exchangerate.host>.

## Demo

<https://waltad.github.io/currency-converter-react/>

## Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Project made as part of training exercises in Java Script and tools supporting work in the frontend.

## Tech

Currency calculator uses a number of open source projects to work properly:

- [HTML] - HyperText Markup Language
- [JS] - JavaScript
- [CSS] - Cascading Style Sheets
- [BEM] - Blocks, Elements and Modifiers - CSS block naming technology that takes page layout into account
- [React] - JavaScript library for building JavaScript apps in a browser
  - [hooks] - useSate, useFffect
  - [custom hooks] - useCurrentDate, useEchangeRatesData
  - [styled-Components]
- [Axios] - a promise-based HTTP Client for node.js and the browser

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
