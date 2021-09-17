import React from "react";

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
  render() {
    return (
      <>
        <div>
          <h2>Counter using createRef()</h2>

          <p>Count: {this.state.count}</p>
          <button onClick={this.inc}>Inc</button>
        </div>
      </>
    );
  }
}
export default Counter;
