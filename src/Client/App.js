import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import SignupForm from './components/Signup/SignupForm';
import Login from './components/Login/Login';
import PrivateRoute from './Utils/PrivateRoute'
import Profile from './components/Profile/Profile';



export default function App() {
  return (
    <div>
       <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={SignupForm} />
        <Route path='/feed' component={Home}/>
        <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  )
}




