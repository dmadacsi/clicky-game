import React from "react";
import "./CharPics.css";
// import "./Counter.js";
const CharPics = props => (
  <div className="card">
 
    <div className="img-container"> 
      <img alt={props.name} src={props.image} />
      
    </div>

    <span onClick={() => props.mixClick(props.id) + props.handleIncrement(props.id)} className="mixup">
   x
    </span>
   
    
    
  </div> 
  

);

export default CharPics;
