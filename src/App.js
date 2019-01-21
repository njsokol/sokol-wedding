import React, { Component } from "react";
import "./App.css";
import Image1 from "./images/engagement-photos/AW0A1155.JPG";
import Image4 from "./images/engagement-photos/AW0A1191.JPG";
import Image5 from "./images/engagement-photos/AW0A1284.JPG";
import golfImage from "./images/golf.jpg";

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
          <h1 className="text-4">
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  color: "#111",
                  fontSize: "1.1em",
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
          <div style={{ textAlign: "center" }}>
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
        <div style={{ padding: "3rem 0", flex: 1, backgroundColor: "#eee" }}>
          <h1 className="heading-1">Attire:</h1>
          <iframe
            seamless="seamless"
            style={{
              width: "100%",
              border: "none",
              display: "block",
              maxWidth: "420px",
              height: "360px",
              margin: "0 auto"
            }}
            src="https://getyarn.io/yarn-clip/embed/b492e5e2-4486-4f33-bc97-d4727e67a61d?autoplay=false"
          >
            {" "}
          </iframe>
          <h1 className="text-3" style={{ textAlign: "center" }}>
            A.K.A. Business Casual
          </h1>
        </div>
        <div
          style={{
            padding: "3rem 0 5rem 0"
          }}
        >
          <h1 className="heading-1">Room Block</h1>
          <div className="text-container">
            <p>
              We have reserved a block of hotel rooms at the wedding venue -
              Vintage Villas Boutique Hotel, Lake Travis. The room block is in
              the (Central Texas Villa) and available for our group to book on
              Friday, January 25 and/or Saturday, January 26. You may call the
              Vintage Villas Hotel directly 512-266-9333; the hotel website is{" "}
              <a
                href="https://www.vintagevillas.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.vintagevillas.com/
              </a>{" "}
            </p>
            <p>
              Another option is Lake Austin (All Inclusive) Resort and Spa which
              is also very close to the wedding venue (@ 3 miles). Their
              website:
              <a
                href="https://www.lakeaustin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.lakeaustin.com/
              </a>
            </p>
          </div>
        </div>
        <div
          style={{
            padding: "3rem 0 5rem 0"
          }}
          className="golf-container"
        >
          <h1 className="heading-1" style={{ color: "#FFF" }}>
            Golf
          </h1>
          <div className="text-container">
            <p>
              Dave will organize and host all golfers at our University of Texas
              Country Club on Friday January 25. Course is 7,412 yards, par 71
              overlooking Lake Austin. Website:{" "}
              <a
                href="https://www.utgolfclub.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.utgolfclub.com/
              </a>
            </p>
            <p>
              If 7,412 is too long, Molly will host interested groups on the 6
              hole par 3 short course - "Spieth Lower 40".
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://docs.google.com/spreadsheets/d/1wjkILY6xvjq-Y8QVVMpOOo7ogW95hLbccnDlA9Z9SLA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="golf-sign-up"
              >
                Sign Up Here
              </a>
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
      </div>
    );
  }
}

export default App;
