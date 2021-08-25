import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav.js';
import Home from './components/Home';
import Footer from './components/Footer';
import Writing from './components/Writing';
import About from './components/About';

function App() {

  return (
    <div className="App container vh-100">
      <Router>
        <Route path="/about" component={() => <Nav />} />
        <Route path="/writing" component={() => <Nav />} />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/writing" exact component={() => <Writing />} />
        </Switch>
        <Route path="/about" component={() => <Footer />} />
        <Route path="/writing" component={() => <Footer />} />
      </Router>
    </div>
  );
}

export default App;
