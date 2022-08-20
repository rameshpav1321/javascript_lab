import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({ message: "goodbye" });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Wanna click?</button> */}
        {/* <button onClick={() => this.clickHandler()}>Wanna click?</button> */}
        <button onClick={this.clickHandler}>Wanna click?</button>
      </div>
    );
  }
}

export default EventBind;
