import React from "react";
import Props from "./Props";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });
  render() {
    return (
      <>
        <div>
          <h2>Counter using createRef()</h2>

          <p>Count: {this.state.count}</p>
          <button onClick={this.inc}>Inc</button>
          <button onClick={this.dec}>Dec</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <Props name="Mythu" age={24} company="Guvi" gender="Male" />
      </>
    );
  }
}
export default Counter;
