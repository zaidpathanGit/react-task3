import React, { Component } from 'react';
import '../scss/HeaderStyle.scss';

class Loader extends Component {
  render() {
    return (
      <>
        <img
          src={require('../asset/images/loader.gif')}
          className="loader"
          alt="Loader"
          style={{ display: this.props.visibility }}
        />
      </>
    );
  }
}

export default Loader;