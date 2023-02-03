import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  static defaultProps = {
    name: "Abed",
  };
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}</p>
        {this.props.name === "Adel" && <Age age={17} />}
      </div>
    );
  }
}
