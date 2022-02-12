import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import store from './redux/store';

export default function App() {
 return (
    
  <BrowserRouter>
   <Routes/>
  </BrowserRouter>

 );
}
