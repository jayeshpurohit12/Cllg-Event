import React from "react";
import{useHistory} from 'react-router-dom';
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form } from 'react-bootstrap';

const Create=()=>{
    const history = useHistory();
        return (
          <div className="Create">
              <IconButton
                onClick={() => {
                  history.push("/");
                }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>
              <Form style={{width:"60%", margin:"2rem auto", border:"2px solid black", padding:"2rem", borderRadius:"10px"}}>
  <Form.Group controlId="exampleForm.ControlInput1">
   <center><Form.Label><strong>CREATE EVENT</strong></Form.Label></center>
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Normal text" />
    <Form.Label>Time</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
    <Form.Label>Date</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
    <Form.Label>Venue</Form.Label>
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Category</Form.Label>
    <Form.Control as="select">
      <option>Webinar</option>
      <option>Sport</option>
      <option>Art</option>
      <option>Tech</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={10} />
    </Form.Group>
    <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Image Upload(min size: ....)" />
  </Form.Group>
</Form>
              </div>
              )
}
export default Create;