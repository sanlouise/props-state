import React, { Component } from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}

export default DisplayComponent;
