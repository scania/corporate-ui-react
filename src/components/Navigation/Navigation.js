import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import { routes } from '../../routes';

// CSS
import './Navigation.scss';

const NavItem = (props) => (
  <NavLink 
    activeClassName="active"
    to={((props.parent || {}).url || '') + props.item.url || ''}
    className={props.item.children ? 'parent' : ''}
    slot= {props.item.type + '-items'}
    isActive={() => props.active}
    { ...props.item.attrs }
    >{props.item.name}
  </NavLink> 
);

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.parent = ''
    this.active = {}

    this.setActive();

    this.props.history.listen((location) => this.setActive(location));
  }

  setActive(location=this.props.location) {
    this.parent = '/' + location.pathname.split('/')[1]
    this.active = routes.find(item => item.url === this.parent) || {}
  }

  render() {
    return (
      <c-navigation>
        {routes.map((item, key) => 
          <NavItem item={item} active={item.url === this.parent} key={key} />
        )}

        <div className="dropdown" slot="secondary-items">
          <a className="dropdown-toggle" href="#" data-toggle="dropdown">User</a>

          <div className="dropdown-menu">
            <NavLink to="/user/profile" className="dropdown-item">Profile</NavLink>
            <NavLink to="/user/setting" className="dropdown-item">Settings</NavLink>
          </div>
        </div>

        <c-navigation slot="sub" caption={this.active.name} active={this.active.children} target={this.active.url} expand="true">
          {(this.active.children || []).map((child, key) => 
            <NavItem item={child} parent={this.active} active={child.url === '/' + this.props.location.pathname.split('/').pop()} key={key} />
          )}
        </c-navigation>
      </c-navigation>
    );
  }
}

export default withRouter(Navigation);
