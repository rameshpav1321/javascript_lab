import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class ContextDemoE extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <div>hello {userName}</div>;
        }}
      </UserConsumer>
    );
  }
}
export default ContextDemoE;
