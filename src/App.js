'use strict';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Preloader from '../src/components/preloader';

// import Navbar from './components/navbar';
// import Home from './components/home/';
// import About from './components/about/';
// import Projects from './components/projects/';
// import Footer from './components/footer';
// import Resume from './components/resume/';
// import ScrollToTop from './components/ScrollToTop'; //  //I'm not sure if I will still need this as I apply parallax scroll, and other .CSS tricks- we'll see. //

import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <Router>
        <Preloader load={load} />
        <div className='App' id={load ? 'no-scroll' : 'scroll'}>
            <Navbar />
            
            <ScrollToTop />
            
            <Switch>
                {/* <Route path='/' exact component={Home} />
                <Route path='/project' component={Projects} />
                <Route path='/about' component={About} />
                <Route path='/resume' component={Resume} /> */}
            </Switch>
            
            <Footer />
        </div>
    </Router>
  );
};

export default App;