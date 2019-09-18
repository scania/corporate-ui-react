# Corporate UI in React application

To include Corporate UI components in React application, follow these steps:

1. From the command line, go to the project folder. Then run `npm i corporate-ui-dev --save` from the command line to install corporate-ui-dev NPM package.
2. Import `defineCustomElements` from corporate-ui-dev package, and call `defineCustomElements(['component_name'])` inside `index.js` or in any React component that will use Corporate UI components. 

   The code below will load `c-theme, c-footer, and c-header`. For all available components, check [this link](https://static.scania.com/build/global/4.0.0-alpha.1/www/index.html). To import all components, pass an 'all' string instead: `defineCustomElements('all')`.

Below is the example code in `index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './scenes/Home/Home';

import { defineCustomElements } from 'corporate-ui-dev/dist';

defineCustomElements(['c-theme','c-header','c-footer']);
// to import all components pass an 'all' value
// defineCustomElements('all');

const App = (
  <Router>
    <c-theme name="scania"></c-theme>
    <c-header
      site-name="Corporate UI"
      items='[{ "text": "Home", "href": "/" }]'>
    </c-header>

    <c-footer>
      <a href="/cookies" slot="items">Cookies</a>
      <a href="/contact-us" slot="items">Contact us</a>
    </c-footer>
   </Router>
)

ReactDOM.render(App, document.body);

serviceWorker.unregister();

```

To be able to have Scania sticky footer, set the root selector to the html body. 
```
ReactDOM.render(App, document.body);
```


## Styling

To use Scania styling on a project application, import scania-theme package and add Scania theme using the `c-theme` component. 

1. Install scania-theme package

   `npm i scania-theme`

2. Import `theme` in the project and use it with `addTheme` function from corporate-ui.

   ```js
   import { addTheme } from 'corporate-ui-dev/dist/'; 
   import { theme as scania } from 'scania-theme'; 

   addTheme(scania);
   ```

3. Add the code below in the React component template :

   `<c-theme name="scania" global="true"></c-theme>`

   If the `global` attribute set to true, it will add bootstrap 4 styling classes & javascript.


## Live example

See the running example on [this link](https://scania.github.io/corporate-ui-react/).


## How to run this project

1. Clone the project
2. Run `npm i` to install package dependencies
3. Run `npm start`. 

   The app will run in the development mode.<br>
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. `npm run build`

   Builds the app for production to the `build` folder.<br>
   It correctly bundles React in production mode and optimizes the build for the best performance.
   The build is minified and the filenames include the hashes.<br>
   Your app is ready to be deployed!
