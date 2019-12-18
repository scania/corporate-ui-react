import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className="container-fluid">
          <h1>Home</h1>
          <p>Some text goes here.</p>
        </div>
      </section>
    );
  }
}

export default Home;
