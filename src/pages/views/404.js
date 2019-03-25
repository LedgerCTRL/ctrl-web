import React, {Component} from 'react';

const logo = "/img/logo.png"
const cardImgStyle = {
    width: "50%",
    paddingTop: "20px"
}

const impactStyle = {
    marginTop: "60px",
    marginBottom: "60px"
}

export default class NotFound extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2><code>Bummer: 404</code></h2>
                <p>
                    The page you requested could not be found.
                </p>
            </header>
            </div>
        )
    }
}