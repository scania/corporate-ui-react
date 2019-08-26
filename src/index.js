import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import data from '../package.json';
import './index.scss';

// Scenes
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

// Components
import Home from './scenes/Home/Home';
import Info from './scenes/Info/Info';
import Contact from './scenes/Contact/Contact';

import * as serviceWorker from './serviceWorker';

import { defineCustomElements, addTheme } from 'corporate-ui-dev/dist';
import { theme as scania } from 'scania-theme';

defineCustomElements(['c-container', 'c-theme']);
addTheme(scania);

const ITEMS = [
  { name: 'Home', url: '/', ctrl: Home, attrs: { exact: true } },
  { name: 'Info', url: '/info', ctrl: Info },
  { name: 'Contact', url: '/contact', ctrl: Contact ,
    children: [
      { name: 'about', url:'about', ctrl: Contact },
      { name: 'profile', url:'profile', ctrl: Contact }
    ]
  }
]

const App = (
  <Router basename={data.name}>
    <c-theme name="scania" global="true"></c-theme>
    <Header items={ITEMS} />
    <Content items={ITEMS} />
    <Footer />
  </Router>
)

ReactDOM.render(App, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
