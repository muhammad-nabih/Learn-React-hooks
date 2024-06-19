import React from "react";

function Age({ age }) {
  console.log("============ Age ============")
  return (
    <h1
      style={{
        background: "#007bff",
        color: "black",
        padding: "10px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {age}
    </h1>
  );
}
export default React.memo(Age);
