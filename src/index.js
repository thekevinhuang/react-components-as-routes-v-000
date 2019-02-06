import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Login from './Login'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar

ReactDOM.render((
  <Router>
    <>
      <Navbar />
      <Route exact path = "/" component={Home} />
      <Route exact path= "/about" component={About} />
      <Route exact path= "/login" component={Login} />
    </>
  </Router>),
  document.getElementById('root')
);
