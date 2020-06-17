import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';
import { Alerts } from './components/layout/Alerts';

import ContactState from './Context/Contact/ContactState';
import AuthState from './Context/auth/AuthState';
import AlertState from './Context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    // Everything exists inside of the contact state
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment className='App'>
              <NavBar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/logout' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
