import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from 'react-router-dom';
import { Routes } from './routes';
import createBrowserHistory from 'history/createBrowserHistory';
//import * as Bootstrap from 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

const customHistory = createBrowserHistory()

ReactDOM.render(<Router history={customHistory}>
    <div>
        <Routes />
    </div>
</Router>,
    document.getElementById("root")
);