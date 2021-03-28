import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
function DetailBox(props) {
  return (
    <Card
      style={{ width: "18rem" }}
      className={`detail-box-card ${props.classNameGiven}`}
    >
      <div className="image-container">
        <Card.Img variant="top" src={props.icon} />
      </div>
      <Card.Body>
        <Card.Title>Brand Recognition</Card.Title>
        <Card.Text>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DetailBox;
