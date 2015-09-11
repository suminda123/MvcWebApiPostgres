/**
 * Created by earl.suminda on 11/09/2015.
 */
"use strict";
import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

let Header = React.createClass({
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                       header image
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="login">Login</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;