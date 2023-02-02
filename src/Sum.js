import React from "react";

export class Sum extends React.Component {
  render() {
    const { a, b } = this.props;
    return <h2>{a + b}</h2>;
  }
}
