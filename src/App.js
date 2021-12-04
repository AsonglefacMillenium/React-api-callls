import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routing from './Routing';

const App = () => {
  return (
    <div className="app">
    <Router>
    <Header/>
   <Routing/>
   
    </Router>
     
    </div>
  )
}

export default App
