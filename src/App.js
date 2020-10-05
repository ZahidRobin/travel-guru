import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Search from './components/Search/Search';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserLoginContext = createContext();

function App() {
  const [user,setUser] = useState({
    isLogin: false,
    name: '',
    email: ''
  })
  return (
    <UserLoginContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/search/:id">
            <Search></Search>
          </PrivateRoute>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserLoginContext.Provider>
  );
}

export default App;
