import React, { Component } from 'react';

const ChildComponent = (props) => (
  <div>Dumb Component receiving Props
    <div>
      <input type="submit" onClick={props.onClick}/>
    </div>
  </div>
)

export default ChildComponent;
