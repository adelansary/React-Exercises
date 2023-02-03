import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  static defaultProps = {
    name: "Adel",
    age: "not specified",
  };
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
        <Age age={19} />
      </div>
    );
  }
}
