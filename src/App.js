import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Princesses from "./components/Princesses"
import princesses from "./princesses.json";
import "./App.css";

class App extends React.Component {

  state = {
    princesses: princesses,
    score: 0,
    topscore: 0
  }

  imgSelect = id => {

    const sortedPrincesses = this.state.princesses.sort(() => Math.random() - 0.5);
    this.setState({
      princesses: sortedPrincesses
    });

    const selectedElement = this.state.princesses.find(element => element.id === id);
    console.log(selectedElement)

    if (selectedElement.clicked) {

      var reset = this.state.princesses;

      for (let i = 0; i < reset.length; i++) {
        reset[i].clicked = false;
      }
      this.setState({
        score: 0,
        princesses: reset,
        message: "Incorrect Guess - Try Again!"
      })
    }
    else {
      selectedElement.clicked = true;
      if (this.state.score < 11) {
        this.setState({
          score: this.state.score + 1,
          message: "Wonderful job, keep guessing!"
        });
        if (this.state.score === this.state.topscore) {
          this.setState({
            topscore: this.state.topscore + 1,
          });
        }
        console.log("ORIGINAL", this.state.princesses);
      } if (this.state.score === 11) {
        const clear = this.state.princesses.map(element => {
          return { ...element, clicked: false }
        });
        this.setState({
          score: 0,
          topscore: 0,
          princesses: clear,
          message: "YOU WON!!! REFRESH TO START AGAIN!"
        });
        console.log("CLEAR: ", clear)
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message}>
        <a href="on-change">Disney Clicky Game</a></Navbar>
        <Jumbotron />
        <div className="container">
          {
            this.state.princesses.map((princesses, index) => (
              <Princesses key={index} id={princesses.id} image={princesses.image} imgSelect={this.imgSelect} />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}
export default App;