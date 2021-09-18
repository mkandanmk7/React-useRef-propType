import React, { Component } from "react";
import propTypes from "prop-types";
// You need to download prop-types lib;
export default class Props extends Component {
  render() {
    return (
      <div>
        <h1>Props class component</h1>
        <p>Name:{this.props.name}</p>
        <p>age:{this.props.age}</p>
        <p>Company:{this.props.company}</p>
        <p>Gender:{this.props.gender}</p>
        <p>City:{this.props.city}</p>
        {/* <p>Data:{this.props.data ? this.props.data : "data not exist"}</p> */}
      </div>
    );
  }
}
// console.log(Props);

// propTypes{} object ;

Props.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  company: propTypes.string,
  gender: propTypes.oneOf(["Female", "Male", "Others"]),
  city: propTypes.string.isRequired,
};
// default taken value from defaultProps;
Props.defaultProps = {
  city: "Pollachi",
};
