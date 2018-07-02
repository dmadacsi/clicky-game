import React from "react";

const Counter= (props) => (
    <div className="text-center">
        <div className="card-header">
            <h3 className="card-title">Your Score!</h3>
        </div>
        <div className="card-body">
            <p className="card-text">Click Count: {props.count}</p>
           
            {/* <span onClick={() => props.handleIncrement(props.id)} className="count">
            </span> */}
        </div>
    </div>
);


export default Counter;
