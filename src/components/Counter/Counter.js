import React from "react";

const Counter= ()=> (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Click Counter!</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn btn-primary" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );


export default Counter;

// export default Counter;
// class Counter extends React.Component {
//     state = {
//       count: 0
//     }
  
//     handleIncrement = () => {
//       this.setState({ count: this.state.count + 1 }); }
  
//     render() {
//       return (
//         <div>
//           <p>{this.state.count}</p>
//           <button onClick={this.handleIncrement}>Increment</button>
//           <p>{(this.state.count % 2 === 0) ? "Woah! That's an even number! 😲" : "That's an odd number 😒"}</p>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Counter />, mountNode);