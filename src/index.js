import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {weatherReducer} from './reducers/weatherReducer'
import reportWebVitals from './reportWebVitals';
//REDUX
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk" 
//STYLES
import "./styles/css/index.css"

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(weatherReducer , composeEnchancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
