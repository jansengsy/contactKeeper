import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Register } from './components/auth/Register';

import ContactState from './Context/Contact/ContactState';
import AuthState from './Context/auth/AuthState';
import './App.css';

const App = () => {
  return (
    // Everything exists inside of the contact state
    <AuthState>
      <ContactState>
        <Router>
          <Fragment className='App'>
            <NavBar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
