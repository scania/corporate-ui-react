# Corporate UI in a React application

## Getting started

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
   
   
## Project setup

To include Corporate UI components in React application, follow these steps:

1. Install corporate-ui  and scania-theme package

   ```
   npm i corporate-ui-dev
   npm i scania-theme
   ```

2. Import and use `defineCustomElements` and `addTheme` from corporate-ui-dev package

3. Import and use `theme` from scania-theme package

4.  Use `c-theme` component in the template

   ```<c-theme name="scania" global="true"></c-theme>```
   
   If the `global` attribute set to true, it will add bootstrap 4 styling classes & javascript.
   

The code in `index.js` below will load `c-theme, c-footer, and c-header`. For all available components, check [this link](https://static.scania.com/build/global/4.0.0-alpha.1/www/index.html). To import all components, pass an 'all' string instead.

```js
import React from 'react';

import { defineCustomElements, addTheme } from 'corporate-ui-dev';
import { theme as scania } from 'scania-theme'; 

defineCustomElements(['c-theme','c-header','c-footer']);
addTheme(scania);
// to import all components pass an 'all' value
// defineCustomElements('all');

const App = (
  <Router>
    <c-theme name="scania" global="true"></c-theme>
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

```

To be able to have Scania sticky footer, set the root selector to the html body. 
```
ReactDOM.render(App, document.body);
```


## Live example

See the running example on [this link](https://scania.github.io/corporate-ui-react/).

