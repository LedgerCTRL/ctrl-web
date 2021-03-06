import React, {Component} from 'react';

export default class Navbar extends Component {
    state = {};

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="/">LedgerCTRL</a>
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">Home</a>
                <a className="nav-item nav-link" href="/tutorial">Tutorial</a>
                <a className="nav-item nav-link" href="/values">Mission</a>
                </div>
            </div>
        );
    }
}
