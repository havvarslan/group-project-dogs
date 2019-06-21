import React from "react";
import "./Favourites.css";
import Dog from "./Dog.js";
class Favourites extends React.Component {
  render() {
    return (
      <div className="Favourites">
        <div className="Favourites-breeds">
          <h2>Favourite Breeds</h2>
          <p>???</p>
          <p>???</p>
        </div>
        <div className="Favourites-saved">
          <h2>Saved Photos</h2>
          <div className="Favourites-photos">

            {this.props.images.map((pic) => {
              return <img src={pic} />;
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;
