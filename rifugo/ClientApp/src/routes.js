import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';

export default function Routes() {
 return (
   <div>
     <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/aboutus' component={Aboutus}/>
     </Switch>
   </div>
 );
}