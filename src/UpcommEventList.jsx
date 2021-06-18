import React, { useState,useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { dbs } from "./firebase.js";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton} from "@material-ui/core";
import { auth } from "./firebase";
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

const UpcommEventList = (props) => {

  var val=props.idp;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
      return (
        <>
          <div className="event-img-dist" style={{alignItems: "center"}}>
          <Card border="info" style={{ width: "14rem",height:"100%",margin:"auto", boxShadow:"2px 3px 4px grey"}}>
              <Card.Img variant="top" style={{height : "10.3rem"}} src={props.Url} />
              <Card.Body>
                <Card.Title className="Title_style">{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ color: "black", display: "flex" }}>
                <div style={{ padding:"0.5rem" }}>{props.time}</div>
                <div style={{ padding:"0.5rem" }}>{props.date}</div>
              </Card.Subtitle>
              <div style={{height:"8rem"}}>
                <Card.Text>{props.description}</Card.Text>
                </div>
               
              {(user === null) ? (
                <div>
                 <center>
                 <Button
                   variant="primary"
                   className="event_btn"
                   onClick={() => setOpen(true)}
                 >
                   View Details
                 </Button>
                 </center>
                 </div>
              ):(
                <div>
                 <Button
                   variant="primary"
                   className="event_btn"
                   onClick={() => setOpen(true)}
                 >
                 View Details
                 </Button>
              <IconButton onClick ={
               ()=>{ var r=prompt("Are you sure you want to delete (Yes/No)");
               if(r!==null){
               var x=r.toLowerCase() ;
               if (x==="yes") {
                dbs.collection("UpcommingPosts").doc(val).delete();
               } 
              }
             }
             } color="secondary" aria-label="delete" style={{float:"right",padding:"0.5rem 0.9rem"}}>
              <DeleteIcon  />
              </IconButton>
             </div>
              )
            }
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
    
};

export default UpcommEventList;