'use strict';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Preloader from '../src/components/preloader';

import Navbar from './components/navbar/navBar';
import Home from './components/home/home';
// import About from './components/about/';
// import Projects from './components/projects/';
import Footer from './components/footer/footer';
// import Resume from './components/resume/';
import Scroll from './components/scroll'; //  //I'm not sure if I will still need this as I apply parallax scroll, and other .CSS tricks- we'll see. //

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';


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
            
            <Scroll />
            
            <Switch>
                <Route path='/' exact component={Home} />
                {/* <Route path='/project' component={Projects} /> */}
                <Route path='/about' component={About} />
                {/* <Route path='/resume' component={Resume} /> */}
            </Switch>
            
            <Footer />
        </div>
    </Router>
  );
};

export default App;