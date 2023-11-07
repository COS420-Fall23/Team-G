# BearPool

Our app will provide rides to students, from students. It will be similar to other ride-sharing applications but will only proctor rides to and from campus. All this, in an effort to help students without vehicles find transportation on a daily basis. The end goal of the app will be to match students up with those who have a similar schedule. This may take a few tries, but two students who have a similar schedule will likely continue making trips together for an entire semester. 


## Meeting timings

Standup meetings every tuesday 5:00 - 6:00



## Team G

Repository of team g

Sustainable and equitable parking and transport to and from campus

PM: Abhilash Durgam (abhilash.durgam@maine.edu)

Developers: David Neufeld (david.neufeld@maine.edu) Kledis Zaimi (kledis.zaimi@maine.edu) Knox Brown (knox.brown@maine.edu)

Designers: John Kearney (john.kearney@maine.edu) Tiffany Ha (tiffany.ha@maine.edu)

Stand-up meetings on 5-6pm on Tuesday.

Guidelines for communication: When a question is put on Discord try to respond to it by the end of the day. When someone @ you on Discord respond within a couple of hours

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

List of contributors (Add your own name):
David Neufeld, Tiffany Ha, Quinn Knowles, John Kearney, Kledis Zaimi

## Software architecture:

bearpool__
   - [README.md](README.md)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __public__
     - [favicon.ico](public/favicon.ico)
     - [index.html](public/index.html)
     - [logo192.png](public/logo192.png)
     - [logo512.png](public/logo512.png)
     - [manifest.json](public/manifest.json)
     - [robots.txt](public/robots.txt)
   - __src__
     - [App.css](src/App.css)
     - [App.js](src/App.js)
     - [App.test.js](src/App.test.js)
     - __Home Dashboard__
       - [Homescreen.jsx](src/Home Dashboard/Homescreen.jsx)
       - [MapInterface.jsx](src/Home Dashboard/MapInterface.jsx)
       - [SetupLeaflet.jsx](src/Home Dashboard/SetupLeaflet.jsx)
     - __Location and Routing__
       - [LocationComponent.jsx](src/Location and Routing/LocationComponent.jsx)
     - [MainRouter.jsx](src/MainRouter.jsx)
     - __Sign in up__
       - [Signin.jsx](src/Sign in up/Signin.jsx)
       - [Signup.jsx](src/Sign in up/Signup.jsx)
       - [signup.test.jsx](src/Sign in up/signup.test.jsx)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - [logo.svg](src/logo.svg)
     - [reportWebVitals.js](src/reportWebVitals.js)
     - [setupTests.js](src/setupTests.js)

Additional libraries

@emotion/react and @emotion/styled: These libraries are part of the Emotion CSS-in-JS styling framework, which allows you to write CSS styles with JavaScript and use them in React components. They provide powerful ways to style applications with dynamic capabilities.

@mui/material, @mui/icons-material, @mui/system: These are part of Material-UI, a popular React UI framework that provides pre-designed components according to Material Design principles, allowing for rapid UI development with a consistent style.

leaflet and react-leaflet: Leaflet is a leading open-source JavaScript library for mobile-friendly interactive maps. react-leaflet provides an abstraction of leaflet as React components, making it easier to create and control the map from React applications.

react, react-dom: React is the core library for building components, and react-dom is the glue between React and the DOM, allowing you to render and manipulate DOM elements in a web page using React.

react-router-dom: This is the standard routing library for React, which lets you handle navigation and URL management in single-page web applications.
