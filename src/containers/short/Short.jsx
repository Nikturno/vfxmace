import React from 'react';
import "./short.css";

const Short = () => {
  return (
    <div className="portfolio" id="short">
      <h1>PORTFOLIO</h1>
      <div className="short">
        <h2>SHORT-FORM</h2>
        <div className="wrapper-short">
          <div className="inner-short">
            <div className="content-short">
              <div id="video01" className="video-short">
                <iframe src="https://www.youtube.com/embed/QfhLareZ3WQ" title="Shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3>news and media</h3>
              <p>Short-form video is crucial for news and media to capture audience attention in today's fast-paced digital landscape.</p>
            </div>
            <div className="content-short">
              <div id="video02" class="video-short">
                <iframe src="https://www.youtube.com/embed/ZpjoolbFJI0" title="In Real Life (IRL Shorts)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3>high retention</h3>
              <p>High retention rates indicate engaging content and boost visibility, watch time, and revenue.</p>
            </div>
            <div className="content-short">
              <div id="video03" class="video-short">
              <iframe src="https://www.youtube.com/embed/Ppwp4bik3ew" title="TikTok Dropshipping Explained in 60 Seconds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <h3>Engaging style</h3>
              <p>Short-form video style is important for engagement and message retention in social media marketing and Brand growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Short
 