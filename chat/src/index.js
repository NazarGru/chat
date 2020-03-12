import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route , HashRouter as Router} from 'react-router-dom';
import LoginComponent from './Login/Login';
import SignupComponent from './Singup/Singup';
import DashboardComponent from './Dashbord/Dashbord';

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyAgzoNF3pGGc_5QksGWMhxRIQuVoFD-VvI",
    authDomain: "chat-21f4e.firebaseapp.com",
    databaseURL: "https://chat-21f4e.firebaseio.com",
    projectId: "chat-21f4e",
    storageBucket: "chat-21f4e.appspot.com",
    messagingSenderId: "553569046771",
    appId: "1:553569046771:web:f0d7cef73b8c0861816786"
});

const routing = (
    <Router>
        <div id = 'routing-container'>
            <Route exact path="/" component={LoginComponent}></Route>
            <Route path="/singup" component={SignupComponent}></Route>
            <Route path="/dashbord" component={DashboardComponent}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
