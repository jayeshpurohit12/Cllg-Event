import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./css/modal.css";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const PreviousEvent = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  var d = new Date();
  if (
    parseInt(props.date.substring(3, 5)) <= d.getMonth() + 1 &&
    parseInt(props.date.substring(6, 10)) <= d.getFullYear()
  ) {
    if (parseInt(props.date.substring(3, 5)) < d.getMonth() + 1) {
      return (
        <>
          <div className="event-img-dist">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={props.Url} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ color: "black", display: "flex" }}>
                  <div style={{ marginRight: "1rem" }}>{props.time}</div>
                  <div>{props.date}</div>
                </Card.Text>
                <Card.Text>{props.description}</Card.Text>
                <center>
                  <Button
                    variant="primary"
                    className="event_btn"
                    onClick={() => setOpen(true)}
                  >
                    View Details
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </div>

          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
              <h4>
                <div>
                  Name : <div className="modal_detail_style">{props.title}</div>
                </div>
                <div>
                  Category :{" "}
                  <div className="modal_detail_style">{props.Category}</div>
                </div>
                <div>
                  Time : <div className="modal_detail_style">{props.time}</div>
                </div>
                <div>
                  Date :<div className="modal_detail_style">{props.date}</div>
                </div>
                <div>
                  Venue :<div className="modal_detail_style">{props.Venue}</div>
                </div>
                <div>
                  Description :{" "}
                  <div className="modal_detail_style">{props.description}</div>
                </div>
              </h4>
            </div>
          </Modal>
        </>
      );
    } else if (parseInt(props.date.substring(0, 2)) < d.getDate()) {
      return (
        <>
          <div className="event-img-dist">
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src={props.Url} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ color: "black", display: "flex" }}>
                  <div style={{ marginRight: "1rem" }}>{props.time}</div>
                  <div>{props.date}</div>
                </Card.Text>
                <Card.Text>{props.description}</Card.Text>
                <center>
                  <Button
                    variant="primary"
                    className="event_btn"
                    onClick={() => setOpen(true)}
                  >
                    View Details
                  </Button>
                </center>
              </Card.Body>
            </Card>
          </div>

          <Modal open={open} onClose={() => setOpen(false)}>
            <div style={modalStyle} className={classes.paper}>
              <h4>
                <div>
                  Name : <div className="modal_detail_style">{props.title}</div>
                </div>
                <div>
                  Category :{" "}
                  <div className="modal_detail_style">{props.Category}</div>
                </div>
                <div>
                  Time : <div className="modal_detail_style">{props.time}</div>
                </div>
                <div>
                  Date :<div className="modal_detail_style">{props.date}</div>
                </div>
                <div>
                  Venue :<div className="modal_detail_style">{props.Venue}</div>
                </div>
                <div>
                  Description :{" "}
                  <div className="modal_detail_style">{props.description}</div>
                </div>
              </h4>
            </div>
          </Modal>
        </>
      );
    } else {
      return <div className="not_found_call">Currently ! No Event FOUND</div>;
    }
  } else {
    return <div className="not_found_call">Currently ! No Event FOUND</div>;
  }
};
export default PreviousEvent;
