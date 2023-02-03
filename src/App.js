import React from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="Abed" />
        <Counter initialValue={2} incrementAmount={3} incrementInterval={300} />
      </div>
    );
  }
}
