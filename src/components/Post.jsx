import React from "react";
import './Post.css'

export default function Post() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>We believe into something magic</p>
        <p>
          was made for math project
        </p>
      </div>

      <h2 >Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="container">
              <h2>Ratmit Oliza</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>ratmir@gmail.com</p>
              <p>
                <button className="button"><a href="https://www.instagram.com/somebody4703/?hl=ru" className="button" >Contact</a></button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <h2>Zhania Danai</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>zhania@gmail.com</p>
              <p>
                <button className="button"><a href="https://www.instagram.com/zhaniadan/?hl=ru" className="button">Contact</a></button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="container">
              <h2>Math apai</h2>
              <p className="title">Teacher</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>hz@example.com</p>
              <p>
                <button className="button"><a href="https://www.instagram.com/zhaniadan/?hl=ru" className="button">Contact</a></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
