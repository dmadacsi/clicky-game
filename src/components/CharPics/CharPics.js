import React from "react";
import "./CharPics.css";
// import "./Counter.js";
const CharPics = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div> */}
    <span onClick={() => props.removeChar(props.id)} className="remove">
      x
    </span>
    {/* <span onClick={() => props.countChar(props.id)} className="count">
      x
    </span> */}
  </div>
);

export default CharPics;
