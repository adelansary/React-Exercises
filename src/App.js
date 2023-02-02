import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Sum } from "./Sum";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
        <Sum a={5} b={10} />
      </div>
    );
  }
}
