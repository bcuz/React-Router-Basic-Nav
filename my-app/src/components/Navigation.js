import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router</h1>
        <div>
          <NavLink exact to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
