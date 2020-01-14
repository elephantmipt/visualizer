import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar';
import {About} from './pages/about'
import SignInForm from './pages/signin'
import SignUp from './pages/signup'

import ModelDetails from './components/modeldetails';
import UserList from './pages/user'
import Home from './pages/home'



function App() {
  return (
    
    <BrowserRouter>
      <div>
      <NavBar/>
      <Switch>
        <Route path={'/home'} component={Home}></Route>
        <Route path={'/about'} component={About}></Route>
        <Route path={'/sign_in'} component={SignInForm}></Route>
        <Route path={'/sign_up'} component={SignUp}></Route>
        <Route path={'/user'} component={UserList}></Route>
        <Route path={'/model/:id'} component={ModelDetails}></Route>
      </Switch>
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
