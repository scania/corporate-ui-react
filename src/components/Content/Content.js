import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Error from '../../scenes/Error/Error';

import { defineCustomElements } from 'corporate-ui-dev/dist';

defineCustomElements(['c-content']);

class Content extends Component {
  render() {
    return (
      <c-content>
        <Switch>
          {this.props.items.map((item, key) => <Route path={item.url} component={item.ctrl} key={key} {...item.attrs} /> )}
          <Route component={Error} />
        </Switch>
      </c-content>
    );
  }
}

export default Content;
