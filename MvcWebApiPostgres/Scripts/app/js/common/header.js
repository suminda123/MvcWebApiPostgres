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
                    <div className="col-sm-2">
                        <Link to="app" className="navbar-brand">
                           header image
                        </Link>
                    </div>
                    <div className="col-sm-10">
                        <ul className="nav navbar-nav">
                            <li><Link to="app">Home</Link></li>
                            <li><Link to="login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Header;