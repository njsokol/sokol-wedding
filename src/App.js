import React, { Component } from "react";
import "./App.css";
import Image1 from "./images/engagement-photos/AW0A1166bw.jpg";
import Image2 from "./images/engagement-photos/AW0A1079.JPG";
import Image3 from "./images/engagement-photos/AW0A1117.JPG";
import Image4 from "./images/engagement-photos/AW0A1191.JPG";
import Image5 from "./images/engagement-photos/AW0A1284.JPG";

class App extends Component {
  render() {
    return (
      <div>
        <div className="banner" style={{ backgroundImage: `url(${Image1})` }}>
          <h1 className="banner-text">McKenzie & Nathan</h1>
        </div>
        <div style={{ padding: "3rem 0" }}>
          <h1 className="heading-1">When:</h1>
          <h1 className="text-2" style={{ textAlign: "center" }}>
            Saturday, January 26, 2019
          </h1>
        </div>
        <div className="pic-grid">
          <div
            className="pic-grid-item"
            style={{ backgroundImage: `url(${Image2})` }}
          />
          <div
            className="pic-grid-item"
            style={{ backgroundImage: `url(${Image3})` }}
          />
        </div>
        <div style={{ padding: "3rem 0" }}>
          <h1 className="heading-1">Location:</h1>
          <h1 className="text-2" style={{ textAlign: "center" }}>
            Vintage Villas, Austin, TX
          </h1>
        </div>
        <div className="pic-grid">
          <div
            className="pic-grid-item"
            style={{ backgroundImage: `url(${Image4})` }}
          />
          <div
            className="pic-grid-item"
            style={{ backgroundImage: `url(${Image5})` }}
          />
        </div>

        {/* <p>How to get to the ceremony/ hotel room block</p>
        <p>Hotel room block reservation</p>

        <p>Are you from out of town? (Tour Guide Page) </p>
        <p>
          Suggestions on what to do on Friday night (Restaurant suggestions
          around the hotel) and what to do on Saturday day before the wedding…
          In Austin or around the area
        </p>
        <p>
          Suggestions for dinner: The Oasis, Moviehouse and Eatery, Jennas Asian
          Kitchen
        </p>
        <p>Go Into Austin: Chuy’s, For Tex Mex</p>

        <p>Attire- Casual</p>

        <p>Registry- </p>
        <p>Pottery Barn</p>
        <p>Crate and Barrel</p>
        <p>Bed Bath and Beyond</p> */}
      </div>
    );
  }
}

export default App;
