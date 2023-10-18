import React from 'react';
import videoBg from "../../assets/background-video.mp4";
import twitter from "../../assets/x-logo-white 1.png"
import email from "../../assets/brief-logo-white 1.png"
import discord from "../../assets/discord-logo-white 1.png"
import "./contact.css";

const Contact = () => {
  return (
    <div className="container-contact" id="contact">
      <video src={videoBg} autoPlay loop muted />
      <div className="contact-container">
        <div className="contact-content">
          <h1>REQUEST US!</h1>
          <h2>I firmly believe in delivering beyond expectations.</h2>
          <div className="contact-links">
            <div className="twitter">
              <a href="https://twitter.com/VfxMace"><img src={twitter} alt="Logo Twitter" /></a>
              <h3><a href="https://twitter.com/VfxMace">TWITTER</a></h3>
              <p><a href="https://twitter.com/VfxMace">@VfxMace</a></p>
            </div>
            <div className="email">
              <img src={email} alt="Logo Email" />
              <h3>EMAIL</h3>
              <p>benemislove@gmail.com</p>
            </div>
            <div className="discord">
              <img src={discord} alt="Logo Discord" />
              <h3>DISCORD</h3>
              <p>strawhat5815</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
 