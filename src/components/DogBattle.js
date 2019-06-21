import React from "react";
import Dog from "./Dog.js";
import "./DogBattle.css";

class DogBattle extends React.Component {
  vote = (breed) => {
    console.log(breed);
  };
  render() {
    return (
      <div className="DogBattle">
        <h2 className="DogBattle-title">Choose the best dog</h2>
        <div className="DogBattle-images">
          <Dog
            image="http://via.placeholder.com/300x300"
            store={this.storeVotes}
            get={this.getVotes}
            name="one"
            vote={this.vote}
          />
          <Dog
            image="http://via.placeholder.com/300x300"
            store={this.storeVotes}
            get={this.getVotes}
            name="two"
            vote={this.vote}
          />
        </div>
      </div>
    );
  }
}

export default DogBattle;
