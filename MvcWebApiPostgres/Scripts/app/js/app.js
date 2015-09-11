
import styles from './../less/site.less';

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/login';
import HeaderHandler from './common/header';

let App = React.createClass({
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="container">
                            <div className="col-sm-12 header">
                                <HeaderHandler />
                            </div>
                            <div className="col-sm-12">
                                <RouteHandler />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={LoginHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});