
import * as React from 'react';
import { NavLink } from 'react-router-dom';

var logo = require("../img/react-logo.png");

export class Layout extends React.Component {
    render() {
        return <div className="bg-light">
            <div className="container">
                <div className="header clearfix">
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                        <a className="navbar-brand" href="#">React / Webpack Skeleton</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" exact>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-xs-12">
                    {this.props.children}
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Miguel Martín - 2018</span>
                </div>
            </footer></div>
            ;
    }
}