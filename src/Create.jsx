import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button} from "react-bootstrap";
import { dbs, storage } from "./firebase.js";

const Create = () => {
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [des, setDes] = useState("");
  const [cat, setCat] = useState("");
  const [progress,setprogress]=useState(0);
  // handle change function to set image file
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  var d = new Date();
  const handleUpload=()=>{
   const uploadTask=storage.ref(`images/${image.name}`).put(image);
   uploadTask.on("state_changed",(snapshot)=>{
     const progress=Math.round(
     (snapshot.bytesTransferred/snapshot.totalBytes)*100);
     setprogress(progress);
  },
  (error)=>{
    console.log(error);
    alert(error.message);
  },()=>{
    //const storageRef = storage.ref(`images/${image.name}`);
    if (
      parseInt(date.substring(3, 5)) >= d.getMonth() + 1 &&
      parseInt(date.substring(6, 10)) >= d.getFullYear()
    ) {       
      if ((parseInt(date.substring(3, 5)) > d.getMonth() + 1)||(parseInt(date.substring(0, 2)) > d.getDate())){
      storage.ref("images")
        .child("/"+image.name)
        .getDownloadURL().then((url) => {
        dbs
          .collection("UpcommingPosts")
          .add({
            // child of post created
            title: title,
            ImageUrl: url,
            Venue: venue,
            date: date,
            time: time,
            Category: cat,
            description: des,
          })
          setprogress(0);
      setTime("");
      setDate("");
      setVenue("");
      setTitle("");
      setImage(null);
      setDes("");
      setCat("");
    });
  }
}
if (
  parseInt(date.substring(0, 2)) === d.getDate() &&
  parseInt(date.substring(3, 5)) === d.getMonth() + 1 &&
  parseInt(date.substring(6, 10)) === d.getFullYear()
) {   
    storage
      .ref("images")
      .child("/"+image.name)
      .getDownloadURL().then((url) => {
      dbs
        .collection("LivePosts")
        .add({
          // child of post created
          title: title,
          ImageUrl: url,
          Venue: venue,
          date: date,
          time: time,
          Category: cat,
          description: des,
        })
        setprogress(0);
      setTime("");
      setDate("");
      setVenue("");
      setTitle("");
      setImage(null);
      setDes("");
      setCat("");
  });
}
else{
    storage
      .ref("images")
      .child("/"+image.name)
      .getDownloadURL().then((url) => {
      dbs
        .collection("PreviousPosts")
        .add({
          // child of post created
          title: title,
          ImageUrl: url,
          Venue: venue,
          date: date,
          time: time,
          Category: cat,
          description: des,
        })
        setprogress(0);
      setTime("");
      setDate("");
      setVenue("");
      setTitle("");
      setImage(null);
      setDes("");
      setCat("");
  });
}
})
  };
  return (
    <>
    <div className="Create" style={{ backgroundColor: "#ffe387" }}>
      <IconButton
        onClick={() => {
          history.push("/");
        }}
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>
      <Form id="create-form"
        style={{
          width: "70%",
          margin: "2% auto",
          padding: "2rem",
          borderRadius: "10px",
          background: "transparent",
          backgroundColor: "white",
          boxShadow: "1px 3px 5px ",
        }}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <center>
            <div style={{ backgroundColor: "lightblue", height: "50px" }}>
              <Form.Label style={{ marginTop: "0.7rem" }}>
                <strong style={{ fontSize: "20px" }}>CREATE EVENT</strong>
              </Form.Label>
            </div>
          </center>
          <Form.Label
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
            
          >
            Title
          </Form.Label>
          <Form.Control type="text" placeholder="Title" value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }} />
          <Form.Label
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
           
          >
            Time
          </Form.Label>
          <Form.Control size="sm" type="text" placeholder="Time"  value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }} />
          <Form.Label
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
            
          >
            Date
          </Form.Label>
          <Form.Control size="sm" type="text" placeholder="Date" value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }} />
          <Form.Label
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
          
          >
            Venue
          </Form.Label>
          <Form.Control size="sm" type="text" placeholder="Venue"    value={venue}
            onChange={(e) => {
              setVenue(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
            
          >
            Category
          </Form.Label>
          <Form.Control as="select" value={cat}
            onChange={(e) => {
              setCat(e.target.value);
            }}>
            <option>Null</option>
            <option>Webinar</option>
            <option>Sport</option>
            <option>Art</option>
            <option>Tech</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
           
          >
            Description
          </Form.Label>
          <Form.Control as="textarea" rows={10}   value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group>
          <input
            type="file"
            style={{
              fontSize: "18px",
              color: "#000099",
              fontWeight: "600",
              marginTop: "1rem",
              padding: "0.5rem",
            }}
            onChange={ handleChange}
          />
        </Form.Group>
        <progress value={progress} max="100"/>
        <p>Progress : {progress} %</p>
        <br></br>
        <Button onClick={handleUpload}>Submit</Button>
      </Form>
    </div>
  </>
  );
};
export default Create;