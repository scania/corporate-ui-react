import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { defineCustomElements, addTheme } from 'corporate-ui-dev';
import { theme as scania } from 'scania-theme';

import * as serviceWorker from './serviceWorker';
import data from '../package.json';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

// CSS
import './index.scss';

defineCustomElements(['c-theme', 'c-header', 'c-navigation', 'c-content', 'c-footer']);
addTheme(scania);

// TODO: Remove constructor and didMount and change to routes instead of items
class App extends Component {
  render () {
    return (
      <Router basename={data.name}>
        <c-theme name="scania" global="true"></c-theme>
        <Header />
        <Navigation />
        <Content />
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(<App/>, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
