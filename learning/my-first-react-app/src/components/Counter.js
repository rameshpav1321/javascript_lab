import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("with callback", this.state.count)
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log("without callback", this.state.count);
  }
  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Counter</button>
      </div>
    );
  }
}
export default Counter;
