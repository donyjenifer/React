import React from "react";
import "./App.css";
function Propsproduct(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}
 
export default Propsproduct;