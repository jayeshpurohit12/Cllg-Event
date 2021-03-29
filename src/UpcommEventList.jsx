import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
const UpcommEventList = () => {
  return (
    <>
      <div className="event-img-dist">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu5RVwzc8LFlzQ3hbeeGM2JSLw47uwgWaAg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text style={{ color: "black" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default UpcommEventList;
