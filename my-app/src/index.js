import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import ShowPage from './pages/ShowPage';

ReactDOM.render(<ShowPage />, document.getElementById('root'));
// ReactDOM.render(<h1>ijfiahgi撒舒服</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
