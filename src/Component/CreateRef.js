import React from "react";
// import Button from "@mui/material/Button";
import Counter from "./counter";

class CreateRef extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  //   inputRef = React.createRef();
  //   btnRef = React.createRef();
  counterRef = React.createRef(); //need to attach to counter component ref={this.counterRef};

  handleSubmit = () => {
    // console.log("Submitted");
    // normal js using Id;
    // let stud = document.getElementById("stud");
    // console.log(stud.value);
    // createRef() using:
    // console.log(this.inputRef.current.value);
    // console.log(this.btnRef.current);
    // inc operation from createRef component using ref attached in counter component;
    console.log(this.counterRef.current);
    this.counterRef.current.inc(); // we could handle inc from createRef component:
    // this.CounterRef.current.dec();
  };
  dec = () => this.counterRef.current.dec();
  reset = () => this.counterRef.current.reset(); // reset oper from createRef component;

  render() {
    return (
      <>
        <h1>Create Ref </h1>
        {/* <Button variant="contained">Hello </Button> */}
        {/* <input ref={this.inputRef} id="stud" type="text" /> */}
        <h3> counter operation from createRef component</h3>
        <button onClick={this.handleSubmit}>Submit Inc</button>
        <button onClick={this.dec}>Submit Dec</button>
        <button onClick={this.reset}>Submit Reset</button>
        <Counter ref={this.counterRef} />
      </>
    );
  }
}

export default CreateRef;
