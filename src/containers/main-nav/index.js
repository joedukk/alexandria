import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNav extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
      </React.Fragment>
    );
  }
}
