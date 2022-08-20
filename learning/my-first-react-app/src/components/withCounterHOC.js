import React from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent name="prp" />;
    }
  }
  return NewComponent;
};
export default updatedComponent;
