import React, { Component } from 'react';

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.whatWasSaid}</div>
    );
  }
}

export default DisplayComponent;
