import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <c-header site-name="App">
        <NavLink to="/global" slot="items">global</NavLink>
      </c-header>
    );
  }
}

export default Header;
