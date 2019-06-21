import React from "react";
import "./Dog.css";

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null,
      breed: "",
      vote: 0
    };
  }
  getPicture() {
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
      .then((result) => result.json())
      .then((jsonData) => {
        const { message } = jsonData;

        const breed = message.substring(message.indexOf("/breeds/")).split("/")[2];
        this.setState({
          imgSrc: jsonData.message,
          breed
        });
      });
  }

  componentDidMount() {
    this.getPicture();
  }

  increment = () => {
    this.props.vote(this.state.breed);
    this.setState((current) => {
      return {
        vote: current.vote + 1
      };
    });
  };

  render() {
    return (
      <div className="Dog">
        <img className="Dog-image" src={this.state.imgSrc} />
        <p className="vote">
          Votes: {this.state.vote}
          <button className="Dog-button" onClick={this.increment}>
            Best Dog
          </button>
        </p>
      </div>
    );
  }
}

export default Dog;
