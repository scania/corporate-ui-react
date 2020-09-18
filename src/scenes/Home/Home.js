import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div class="container">
          <h1>Home</h1>
          <h3>Visit Scania Digtal Design System at <a target='_blank' href='https://digitaldesign.scania.com'>digitaldesign.scania.com</a><c-icon name='scania-external_link'></c-icon></h3>
          <p>Developing in our design system visit our <a target='_blank' href='https://github.com/scania/corporate-ui'>github</a><c-icon name='scania-external_link'></c-icon></p>
        </div>
      </section>
    );
  }
}

export default Home;
