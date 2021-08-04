import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav.js';
import Home from './components/Home';
import Footer from './components/Footer';
import Journalism from './components/Journalism';
import About from './components/About';

function App() {

  return (
    <div className="App container vh-100">
      <Router>
        <Route path="/about" component={() => <Nav />} />
        <Route path="/journalism" component={() => <Nav />} />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/journalism" exact component={() => <Journalism />} />
        </Switch>
        <Route path="/about" component={() => <Footer />} />
        <Route path="/journalism" component={() => <Footer />} />
      </Router>
    </div>
  );
}

export default App;
