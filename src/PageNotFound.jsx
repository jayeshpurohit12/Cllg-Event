import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        
        <div>
         <div>
         <Link to="/" style={{textDecoration: "none"}}> <h3 style={{display: "block", width: "100%"}}>Go back to Homepage</h3></ Link>
         </div>
            
            <img src="https://miro.medium.com/max/5120/1*DeBkx8vjbumpCO-ZkPE9Cw.png" 
            style={{display: "block", margin: "auto", width: "80%"}}
            />
            
        </div >
    )
}

export default PageNotFound