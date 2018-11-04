import React, { Component } from "react";
import "./App.css";
import Image1 from "./images/engagement-photos/AW0A1155.JPG";
import Image2 from "./images/engagement-photos/AW0A1079.JPG";
import Image3 from "./images/engagement-photos/AW0A1117.JPG";
import Image4 from "./images/engagement-photos/AW0A1191.JPG";
import Image5 from "./images/engagement-photos/AW0A1284.JPG";

class App extends Component {
  render() {
    return (
      <div>
        <div className="banner" style={{ backgroundImage: `url(${Image1})` }}>
          <div className="banner-filler" />
          <h1 className="banner-text">McKenzie & Nathan</h1>
          <div className="scroll-down">
            <img
              src="https://static.thenounproject.com/png/53556-200.png"
              alt=""
            />
          </div>
        </div>
        <div style={{ padding: "3rem 0", flex: 1 }}>
          <h1 className="heading-1">When:</h1>
          <h1 className="text-3" style={{ textAlign: "center" }}>
            Saturday, January 26, 2019
          </h1>
        </div>

        <div style={{ padding: "3rem 0", backgroundColor: "#ffd027" }}>
          <h1 className="heading-1">Event Timeline:</h1>
          <h1 className="text-2" style={{ textAlign: "center" }}>
            Guest Arrival - 4:00
          </h1>
          <h1 className="text-2" style={{ textAlign: "center" }}>
            Ceremony - 4:15
          </h1>
          <h1 className="text-2" style={{ textAlign: "center" }}>
            Cocktail Hour - 4:30
          </h1>
          <h1 className="text-2" style={{ textAlign: "center" }}>
            Reception - 5:30
          </h1>
        </div>
        <div
          style={{
            padding: "3rem 0 5rem 0",
            backgroundColor: "#2a9d8f",
            color: "#FFF"
          }}
        >
          <h1 className="heading-1">Location:</h1>
          <div
            className="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <h1 className="text-4" style={{ paddingRight: "5rem" }}>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "1.5em",
                    paddingBottom: "0.5em",
                    display: "block"
                  }}
                >
                  Vintage Villas
                </span>
                4209 Eck Ln
                <br />
                Austin, TX 78734
              </div>
            </h1>
            <div>
              <div
                className="mapouter"
                style={{
                  border: "1rem solid #214e34",
                  display: "inline-block"
                }}
              >
                <div className="gmap_canvas">
                  <iframe
                    title="cjknajdsncajs"
                    width="300"
                    height="300"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=vintage%20villas%20austin%20tx&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "3rem 0 5rem 0"
          }}
        >
          <h1 className="heading-1">Gift Registry</h1>
          <a
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/546642406?eventType=Wedding"
            className="registry-link"
          >
            <h1 className="text-2" style={{ textAlign: "center" }}>
              Bed Bath and Beyond
            </h1>
          </a>
          <a
            href="https://www.crateandbarrel.com/gift-registry/mckenzie-swarts-and-nathan-sokol/r5904831"
            className="registry-link"
          >
            <h1 className="text-2" style={{ textAlign: "center" }}>
              Crate and Barrel
            </h1>
          </a>
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
