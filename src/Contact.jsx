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
    <IconButton
    onClick={() => {
      history.push("/");
    }}
  >
    <ArrowBackIcon fontSize="small" />
  </IconButton>
    <section className="contact-section my-5" >
      <MDBCard style={{borderBox:"2px 3px grey",backgroundColor:"#F5D273",margin:"2rem"}}>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form" id="head" >
              <h3 className="mt-4" style={{color:"purple"}}>
                <MDBIcon icon="envelope" className="pr-2" style={{color:"purple"}}/>
                Write to us:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
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
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
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
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
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
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
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
                  <div className="md-form mb-0" style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
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
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text" id="head"style={{margin:"display"}} >
              <h3 className="my-4 pb-2" id="head" style={{color:"purple"}}>Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
                    <MDBIcon icon="map-marker-alt" className="pr-2"  />
                    New York, 94126 USA
                  </p>
                </li>
                <li>
                  <p style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}}>
                    <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
                  </p>
                </li>
                <li>
                  <p style={{padding:"1rem", fontWeight:"600",fontSize:"1.5rem"}}>
                    <MDBIcon icon="envelope" className="pr-2"style={{padding:"1rem", fontWeight:"600",fontSize:"1.2rem"}} />
                    contact@example.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </section>
    </>
  );
};

export default ContactPage;