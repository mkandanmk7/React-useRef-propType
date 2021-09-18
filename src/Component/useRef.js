// Hook ref React.useRef();

import React from "react";
import Counter from "./counter";

export const UseRef = () => {
  //   const [count] = React.useState(1);
  const countRef = React.useRef();

  const inc = () => {
    console.log(countRef.current); // counter comp ref to useRef func Comp ; all operation available in UseRef () comp;

    countRef.current.inc();
  };
  const dec = () => {
    countRef.current.dec();
  };
  const reset = () => {
    countRef.current.reset();
  };

  return (
    <div>
      <hr />
      <h1> Counter using - Hooks - useRef()</h1>
      {/* <h3>Count: {count}</h3> */}
      <h2>Counter Changing from UseRef() component:</h2>

      <button type="button" onClick={inc}>
        Inc
      </button>
      <button type="button" onClick={dec}>
        Dec
      </button>
      <button type="button" onClick={reset}>
        Rset
      </button>
      <h1>Counter Class Component</h1>
      <Counter ref={countRef} />
    </div>
  );
};
