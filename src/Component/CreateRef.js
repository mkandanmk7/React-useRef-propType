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
  inputRef = React.createRef();
  btnRef = React.createRef();
  couterRef = React.createRef();

  handleSubmit = () => {
    // console.log("Submitted");
    // normal js using Id;
    let stud = document.getElementById("stud");
    console.log(stud.value);
    // createRef() using:
    console.log(this.inputRef.current.value);
    console.log(this.btnRef.current);
    // inc operation from createRef component using ref attached in counter component;
    console.log(this.counterRef.current);
    this.conterRef.current.inc();
  };

  render() {
    return (
      <>
        <h1>Create Ref </h1>
        {/* <Button variant="contained">Hello </Button> */}
        <input ref={this.inputRef} id="stud" type="text" />
        <button ref={this.btnRef} onClick={this.handleSubmit}>
          Submit
        </button>
        <Counter ref={this.couterRef} />
      </>
    );
  }
}

export default CreateRef;
