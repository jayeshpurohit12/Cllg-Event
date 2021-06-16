import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./css/Contact.css";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { dbs } from "./firebase";
const ContactPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    dbs
      .collection("Contact")
      .add({
        Name: name,
        Email: email,
        Phone: phone,
        Profession: profession,
        Message: message,
      })
      .then(() => {
        alert("Thanks For Your Message We Will Contact You Soon......");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setProfession("");
    setMessage("");
  };
  return (
    <>
    <div>
    <IconButton
    onClick={() => {
      history.push("/");
    }}
  >
    <ArrowBackIcon fontSize="small" />
  </IconButton>
    
      <MDBCard style={{boxShadow:"2px 4px 6px  grey",backgroundColor:"rgb(255,255,255,0.4)",margin:"2rem",borderRadius:"5rem",fontSize:"1rem"}}>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form" id="head" >
              <h3 className="mt-4" style={{color:"blue"}}>
                <MDBIcon icon="envelope" className="pr-2" style={{color:"blue"}}/>
                Write to us:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",color:"darkred",textShadow:"1px 2px 2px white"}}>
                    Your name
                    <MDBInput
                      //label="Your name"
                      type="text"
                      id="form-contact-name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",color:"darkred",textShadow:"1px 2px 2px white"}}>
                    Your email
                    <MDBInput
                      type="text"
                      id="form-contact-email"
                      //label="Your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",color:"darkred",textShadow:"1px 2px 2px white"}}>
                    Your phone no.
                    <MDBInput
                      type="text"
                      id="form-contact-phone"
                      //label="Your phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",color:"darkred",textShadow:"1px 2px 2px white"}}>
                    Your company
                    <MDBInput
                      type="text"
                      id="form-contact-company"
                      //label="Your company"
                      value={profession}
                      onChange={(e) => {
                        setProfession(e.target.value);
                      }}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",color:"darkred",textShadow:"1px 2px 2px white"}}>
                    Your message
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      //label="Your message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                    <MDBBtn style={{backgroundColor:"blue",border:"white"}}rounded color="blue" onClick={handleSubmit}>
                      <MDBIcon icon="paper-plane" style={{color:"white",backgroundColor:"blue",padding:"0.3rem 1.5rem" }} />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" style={{height:"30rem",marginTop:"3rem"}}>
            <MDBCardBody className="contact text-center h-100 white-text" id="head"style={{backgroundColor:"rgb(255,255,255,0.5)",color:"#103c4a",borderRadius:"3rem"}} >
              <h3 className="my-4 pb-2" id="head" style={{color:"#103c4a",fontSize:"1.5rem"}}>Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p style={{padding:"1rem", fontWeight:"600"}}>
                    <MDBIcon icon="map-marker-alt" className="pr-2"  />
                    AITR, Indore
                  </p>
                </li>
                <li>
                  <p style={{padding:"1rem", fontWeight:"600"}}>
                    <MDBIcon icon="phone" className="pr-2" />(+91) 8770 535 206
                  </p>
                </li>
                <li>
                  <p style={{padding:"1rem", fontWeight:"600"}}>
                    <MDBIcon icon="envelope" className="pr-2"style={{padding:"1rem", fontWeight:"600"}} />
                    <a href="mailto: jayeshpurohit456789@gmail.com">Mail Us</a>
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a target="_blank" href="https://twitter.com/tech_jayesh" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.linkedin.com/in/jayesh-purohit-yt/" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.instagram.com/jayesh__purohit/" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
  
    </div>
    </>
  );
};

export default ContactPage;