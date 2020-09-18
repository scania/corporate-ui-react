# Corporate UI in a React application

To run this project locally you will need to NodeJS and npm.

See the running example on [this link](https://scania.github.io/corporate-ui-react/).

Clone this repo, install all dependencies and start it:
```bash
git clone https://github.com/scania/corporate-ui-react.git
cd corporate-ui-react
npm i
npm start
```

## Scania Digital Design System

Visit our Design System at [Digitaldesign.scania.com](https://digitaldesign.scania.com/) for more information

For more information about how to use Corporate-Ui and Scania-Theme go to [digitaldesign.scania.com/getting-started](https://digitaldesign.scania.com/getting-started/development)

## Project setup

To include Corporate UI components in React application, follow these steps:

2. Import and use `defineCustomElements` and `addTheme` from corporate-ui package

3. Import and use `theme` from scania-theme package

4.  Use `c-theme` component in the template

   ```html
      <c-theme name="scania" global="true"></c-theme>
   ```

If the `global` attribute set to true, it will add bootstrap 4 styling classes & javascript.

For all available components, check [this link](https://scania.github.io/corporate-ui-site/).

```js
import React from 'react';

import { defineCustomElements, addTheme } from 'corporate-ui';
import { theme as scania } from 'scania-theme';

defineCustomElements();
addTheme(scania);

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
## Run with local corporate-ui and scania-theme
<details>
  <summary>
  How to setup vue with local Corporate-Ui and Scania-theme?
  </summary>

  Clone both scania-theme and corporate-ui

  Create npm links of **Corporate Ui** and **Scania theme**
  ```bash
  cd ../corporate-ui
  npm link
  cd ../scania-theme
  npm link
  ```

  Add links to **Corporate Ui** and **Scania theme**
  ```bash
  npm run link
    // or
  cd corporate-ui-site
  npm link corporate-ui
  npm link scania-theme
  ```
</details>


