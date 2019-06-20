import React, { Component } from "react";
import Favourites from "./components/Favourites";
import RandomDog from "./components/RandomDog";
import DogBattle from "./components/DogBattle";
import Breeds from "./components/Breeds";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favouriteBreeds: [],
      savedPhotos: []
    };
  }
  saveImage = (img) => {
    const newPhotos = [];
    newPhotos.push(img);

    this.setState((prevState) => {
      return { savedPhotos: newPhotos.concat(prevState.savedPhotos) };
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dogs!</h1>
        </header>
        <Favourites images={this.state.savedPhotos} />
        <RandomDog saveImage={this.saveImage} />
        <DogBattle />
        <Breeds />
      </div>
    );
  }
}

export default App;
