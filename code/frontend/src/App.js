import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Login from './Login';
import Signupone from './signup';
import Dashboard from './Dashboard';
//import Home from './Home/Home';
import Contact from "./Contact/Contact";
import Product from "./Product/Products";

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:5000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      //history.push('/dashboard');
      console.log('hppdjfs')
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <Switch>
              <PublicRoute exact path="/" component={Login} />
              <PublicRoute path="/signup" component={Signupone} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/Product" component={Product} />
              <PrivateRoute path="/Contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
