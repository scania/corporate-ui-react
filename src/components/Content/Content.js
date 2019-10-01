import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../../routes';

class Content extends Component {
  render() {
    return (
      <c-content>
        <Switch>
          {routes.map((item, key) => [
            <Route exact path={item.url} component={item.ctrl} key={key} {...item.attrs}/>,
            <Route path={item.url + '/:id'} component={item.ctrl} key={key} />
          ])}
        </Switch>
      </c-content>
    );
  }
}

export default Content;