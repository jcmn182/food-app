import React from 'react';
import ReactDOM from 'react-dom/client';
//styles
import './index.css';
//components
import App from './App';
//react router
import {BrowserRouter as Router} from 'react-router-dom'
//context
import { StateProvider } from "./context/stateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context//reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App /> 
      </Router>
    </StateProvider>
  </React.StrictMode>
);

