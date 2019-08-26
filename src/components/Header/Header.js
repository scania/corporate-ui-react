import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import 'bootstrap/scss/functions.scss';
// import 'bootstrap/scss/variables.scss';
// import 'bootstrap/scss/mixins.scss';

// import 'bootstrap/scss/_dropdown.scss';

import './Header.scss';

import { defineCustomElements } from 'corporate-ui-dev/dist';

defineCustomElements(['c-header', 'c-navigation']);

const Subnav = (props) => {
  console.log(props);
  if(props.children) {
    return  (
      <c-navigation slot="sub" active>
      { props.children.map((child, key) => 
        <NavLink 
          activeClassName="active" 
          to={props.match.url + '/' + child.url}
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
      dropdownOpen: false
    };
  }

  subnavActive() {
    return true;
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
          slot="primary-items" {...item.attrs}
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
      
      <Switch>
        {this.props.items.map((item, key) => (
          <Route exact
            path={item.url}
            render= {(props) => <Subnav {...props} children = { item.children }/>}
            key={key}
          />
        ))}
      </Switch>
    </c-navigation>
    ];
  }
}

export default Header;
