import React, { useState } from "react";

const PureFunction = () => {
  console.log("function Rendered");
  const [count, ChangeCount] = useState(1);
  return (
    <div>
      <h1>Count:{count}</h1>

      <button onClick={() => ChangeCount(1)}>Counter</button>
    </div>
  );
};

export default PureFunction;
