import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { defineCustomElements } from 'corporate-ui-dev/dist';

defineCustomElements(['c-footer']);

class Footer extends Component {
  render() {
    return (
      <c-footer>
        <NavLink to="/contact" slot="items">Contact</NavLink>
      </c-footer>
    );
  }
}

export default Footer;
