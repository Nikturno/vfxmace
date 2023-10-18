import React from 'react' 
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import "./thumbnail.css"

const Thumbnail = () => {
  return (
    <div className="thumbnail">
        <div className="thumbnail-container">
            <h2>THUMBNAIL</h2>
            <div className="wrapper-thumbnail">
                <div className="inner-thumbnail">
                    <div className="content-thumbnail">
                        <img src={img1} alt="Thumbnail1"/>
                        <img src={img2} alt="thumbnail2" />
                        <img src={img3} alt="thumbnail3" />
                        <img src={img4} alt="thumbnail4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thumbnail
