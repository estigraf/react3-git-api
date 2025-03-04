import React  from "react";
import Print from "../print/Print";
import './button.css'

const Button = ({ text, clickEvent }) => {

  return (
    <>
      <button onClick={clickEvent} >{text} </button>
    </>
  );
};

export default Button;
