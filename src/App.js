import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav.js';
import Home from './components/Home';
import Footer from './components/Footer';
import Writing from './components/Writing';
import Audio from './components/Audio';
import About from './components/About';
import References from './components/References';

function App() {

  return (
    <div className="App container vh-100">
      <Router>
        <Route path="/about" component={() => <Nav />} />
        <Route path="/writing" component={() => <Nav />} />
        <Route path="/audio" component={() => <Nav />} />
        <Route path="/references" component={() => <Nav />} />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/writing" exact component={() => <Writing />} />
          <Route path="/audio" exact component={() => <Audio />} />
          <Route path="/references" exact component={() => <References />} />
        </Switch>
        <Route path="/about" component={() => <Footer />} />
        <Route path="/writing" component={() => <Footer />} />
        <Route path="/references" component={() => <Footer />} />
      </Router>
    </div>
  );
}

export default App;
