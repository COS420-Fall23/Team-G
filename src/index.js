import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter'; // Update the path accordingly
import './Home Dashboard/SetupLeaflet';


ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
