import React from 'react';
import videoBg from "../../assets/background-video.mp4";
import "./header.css";

const Header = () => {
  return (
    <div class="video-container" id="header">
        <video src={videoBg} autoPlay loop muted />
        <div className="header-title">
          <h1>MACE</h1>
        </div>
        <div className="container">
          <div className="container-content">
            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/78oVGK73dmY" title="After effects" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div className="header-text">
          <p>Hello! I'm MACE, a passionate and innovative video editor <br />with a keen eye for detail and a dedication to storytelling through visuals.</p>
        </div>
    </div>
  )
}

export default Header
