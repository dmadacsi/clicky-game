import React, { Component } from "react";
import CharPics from "./components/CharPics";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import chars from "./chars.json";
import "./App.css";

// var Shuffle = require('react-shuffle');
// import CharPics from "./components/CharPics";
class App extends Component {
  // Setting this.state.chars to the chars json array
  state = {
    chars
  };

  removeChar= id => {
    // Filter this.state.chars for characters with an id not equal to the id being removed
    const chars = this.state.chars.filter(char => char.id !==id);
    // Set this.state.chars equal to the new friends array
    this.setState({ chars });
    
  };
  // mixChar() {
  // 	let arr=[];
  // 	for (var i = 0; i < 10; i++) {
  // 		let j = Math.floor(Math.random() * chars.length);
  // 		arr.push(chars[j]);
  // 	}
  // 	return arr;
  // }


  // Map over this.state.chars and render a CharPics component for each char object

    render() {
    return (
      <Wrapper>
        <Title>Click on a Character to gain points but don't click the same one twice!</Title>
        {this.state.chars.map(char => (
          <CharPics
            removeChar={this.removeChar}
            id={char.id}
            key={char.id}
            name={char.name}
            image={char.image}
            occupation={char.occupation}
            location={char.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;