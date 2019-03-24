import React, { Component } from 'react';
import './App.css';
import { blockParams } from 'handlebars';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/views/home';
import NotFound from './pages/views/404';
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
            <Switch>
            <Route exact={true} path='/' render={() => (
              <Home />
            )}/>
            <Route path="*" component={NotFound} />
            </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
