import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default App;
