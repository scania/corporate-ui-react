import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <section>
        <c-container type="fluid">
          <h1>Contact</h1>
          <p>Some contact info goes here.</p>
          <p>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-secondary">Secondary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-light">Light</button>
            <button type="button" className="btn btn-dark">Dark</button>
          </p>
        </c-container>
      </section>
    );
  }
}

export default Users;
