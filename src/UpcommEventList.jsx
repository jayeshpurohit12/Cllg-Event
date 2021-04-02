import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card} from "react-bootstrap";
const UpcommEventList = (props) => {
  var d=new Date();
   if(((parseInt(props.date.substring(0,2))>d.getDate())&&(parseInt(props.date.substring(3,5))>d.getMonth()))||(parseInt(props.date.substring(6,10))>d.getFullYear())){
    return (
      <>
      
        <div className="event-img-dist">
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src={props.Url}
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text style={{ color: "black",display:'flex'}}>
              <div style={{marginRight:'1rem'}}>
                {props.time}
                </div>
                <div>
                {props.date}
                </div>
              </Card.Text>
              <Card.Text>
                {props.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
   }
   else{
     return(
       <div>Hello</div>
     );
   }
   
    

  
};

export default UpcommEventList;