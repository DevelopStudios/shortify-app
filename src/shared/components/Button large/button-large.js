import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
function Buttonlarg(props) {
  return (
    <Button
      className="largButton"
      size="lg"
      type={props.type}
      onClick={props.click}
    >
      {props.loading ? <div class="loading-spinner"></div> : props.text}
    </Button>
  );
}

export default Buttonlarg;
