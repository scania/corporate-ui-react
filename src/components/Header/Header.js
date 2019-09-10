import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Content from '../Content/Content'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import data from './../../../package.json';

// import 'bootstrap/scss/functions.scss';
// import 'bootstrap/scss/variables.scss';
// import 'bootstrap/scss/mixins.scss';

// import 'bootstrap/scss/_dropdown.scss';

import './Header.scss';

import { defineCustomElements } from 'corporate-ui-dev/dist';

defineCustomElements(['c-header', 'c-navigation']);

const Subnav = (props) => {
  if(props.item && props.item.children) {
    return  (
      <c-navigation slot="sub" active target={'/' + data.name + props.item.url} expand="true">
      { props.item.children.map((child, key) => 
        <NavLink 
          activeClassName="active" 
          to={props.item.url + child.url}
          key={key} 
          slot="primary-items" {...child.attrs}
          >{child.name}
        </NavLink> ) }
      </c-navigation>
    )
    
  } else {
    return '';
  }
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      active: {},
      dropdownOpen: false
    };
  }

  setActive(item) {
    this.setState({ active: item });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return [
      <c-header site-name="App">
        <NavLink to="/global" slot="items">global</NavLink>
      </c-header>,
      <c-navigation>
      {this.props.items.map((item, key) => 
        <NavLink 
          activeClassName="active" 
          to={item.url}
          key={key} 
          className={item.children ? 'parent' : ''}
          slot="primary-items" {...item.attrs}
          onClick={() => this.setActive(item)}
          >{item.name}
        </NavLink> 
      )}

      <UncontrolledDropdown setActiveFromChild slot="secondary-items">
        <DropdownToggle tag="a" className="nav-item nav-link" caret>
          User
        </DropdownToggle>
        <DropdownMenu right={true}>
          <DropdownItem tag={NavLink} to="/user/profile">Profile</DropdownItem>
          <DropdownItem tag={NavLink} to="/user/settings">Settings</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

      <Subnav item={ this.state.active } ctrl={Content}/>
    </c-navigation>
    ];
  }
}

export default Header;
