import React from "react";
import "./RandomDog.css";
import { tsThisType } from "@babel/types";

class RandomDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  loadData = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          image: data.message
        });
      });
  };

  componentDidMount = () => {
    this.loadData();
  };

  saveImage = () => {
    this.props.saveImage(this.state.image);
  };
  render() {
    return (
      <div className="RandomDog">
        <h2 className="RandomDog-title">Random Dogs</h2>

        <img className="RandomDog-image" src={this.state.image} />

        <p>
          <button className="RandomDog-button" onClick={this.saveImage}>
            Save Image
          </button>
          <button className="RandomDog-button" onClick={this.loadData}>
            Next Dog
          </button>
        </p>
      </div>
    );
  }
}

export default RandomDog;
