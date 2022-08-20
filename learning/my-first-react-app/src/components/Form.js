import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  handleName = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };
  handleTopic = (e) => {
    this.setState({
      topic: e.target.value,
    });
  };
  handleSubmit = (e) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            value={this.state.username}
            type="text"
            onChange={this.handleName}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <input
            value={this.state.comments}
            type="textarea"
            onChange={this.handleComments}
          ></input>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopic}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
