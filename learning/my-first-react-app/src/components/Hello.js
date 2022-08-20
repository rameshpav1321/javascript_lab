import React from "react";

function Hello(props) {
  // console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "hello prp")
  // );
}
export default Hello;
