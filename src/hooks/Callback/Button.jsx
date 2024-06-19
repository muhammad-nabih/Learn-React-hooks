import React from "react";

function Button({ text, action }) {
  console.log("++++ Button ++++");
  return ( 
    <button className="button-23" role="button" onClick={action}>
      {text}
    </button>
  );
}
export default React.memo(Button);
