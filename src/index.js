import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import the "App Component", to be injected into the DOM.

// In javascript, get the root id file. This is where React will inject components, in the next block below.
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  App is a "component".
  Components are essentially seperate .js files, that include the methods and functionality
    Apps are written in JSX, a mixture of HTML and Javascript
*/ 

// Can CTRL + click on the component to quick navigate to its respective .js file.
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
