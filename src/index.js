import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/store'
import ScrollToTop from './components/ScrollToTop'
import './index.scss';

// STEP 1
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

ReactDOM.render(
  <React.StrictMode> 
    <Router>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
