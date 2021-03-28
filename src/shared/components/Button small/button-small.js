import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
function Buttonsmall(props) {
  return (
    <Button className="buttonSmall" size="sm">
      {props.text}
    </Button>
  );
}

export default Buttonsmall;
