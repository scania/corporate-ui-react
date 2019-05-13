import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import 'bootstrap/scss/functions.scss';
// import 'bootstrap/scss/variables.scss';
// import 'bootstrap/scss/mixins.scss';

// import 'bootstrap/scss/_dropdown.scss';

import './Header.scss';

import { defineCustomElements } from 'corporate-ui-dev/dist/define';

defineCustomElements(['c-header', 'c-navigation']);

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <c-header site-name="App">
        <NavLink to="/global" slot="items">global</NavLink>
        <c-navigation slot="navigation">
          {this.props.items.map((item, key) => <NavLink activeClassName="active" to={item.url} key={key} slot="primary-items" {...item.attrs} >{item.name}</NavLink> )}

          <UncontrolledDropdown setActiveFromChild slot="secondary-items">
            <DropdownToggle tag="a" className="nav-item nav-link" caret>
              User
            </DropdownToggle>
            <DropdownMenu right={true}>
              <DropdownItem tag={NavLink} to="/user/profile">Profile</DropdownItem>
              <DropdownItem tag={NavLink} to="/user/settings">Settings</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </c-navigation>
      </c-header>
    );
  }
}

export default Header;
