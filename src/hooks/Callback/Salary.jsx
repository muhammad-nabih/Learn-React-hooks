import React from "react";

function Salary({ salary }) {
  console.log("**** salary ****")
  return <h1>{salary}</h1>;
}

export default React.memo(Salary)