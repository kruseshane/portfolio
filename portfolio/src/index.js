import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideBar from './App';
import Overview from './Overview';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('side_bar');
const contentElement = document.getElementById('content');

ReactDOM.render(<SideBar />, rootElement);
ReactDOM.render(<Overview />, contentElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
