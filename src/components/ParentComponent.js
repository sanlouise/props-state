import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';

class ParentComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({whatToSay: this.state.whatToSay});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("fired");
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div>Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
        <div>
          <input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit} />
          <DisplayComponent sayWhat={this.handleInput} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
