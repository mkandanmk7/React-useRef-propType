import React from "react";
import "./App.css";
import CreateRef from "./Component/CreateRef";

import { UseRef } from "./Component/useRef";
// import PureFunction from "./Component/pureFunction";

//PureComponent wil wont reRender if same value are changing;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      Name: { Name: "Mythu", age: 4 }, // pure Component  Wont work with array,objects
    };
  }
  render() {
    console.log("Rendered");
    return (
      <>
        {/* <div>      // PureComponent part: 

          <h1>count: {this.state.count}</h1>
          <h2>Name:{this.state.Name.Name}</h2>
          <button
            onClick={() => {
              this.setState({ Name: { Name: "Muthu" } });
            }}
          >
            ChangeName
          </button>
          <button onClick={() => this.setState({ count: 0 })}>Change</button>
        </div>
        <div>
          <h2>Functional component</h2>
          <PureFunction />
        </div> */}

        <CreateRef />
        <UseRef />
      </>
    );
  }
}

export default App;
