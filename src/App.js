import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, Contact, NotFound, Navigation } from './components';

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
