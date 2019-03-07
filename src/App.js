import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const cardImgStyle = {
  width: "50%",
  paddingTop: "20px"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The easiest way to build <code>cycling things here</code> on blockchain.
          </p>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <div className="center">
                  <img src="/img/admin.svg" style={cardImgStyle} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Use Case 1</h5>
                  <p class = "card-text" >do X for Y with this</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <div className="center">
                  <img src="/img/browser.svg" style={cardImgStyle} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Use Case 2</h5>
                  <p class = "card-text" >do X for Y with this</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <div className="center">
                  <img src="/img/email.svg" style={cardImgStyle} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Use Case 3</h5>
                  <p class = "card-text" >do X for Y with this</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer style={{background: "#6666"}}>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
