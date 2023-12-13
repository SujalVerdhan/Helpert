import React from "react";
import "./container.css";
import Maps from "../../assets/Maps.png";
import Img from "../../assets/Rectangle 285.png";
import Camera from "../../assets/camera.png";

function container() {
  return (
    <div className="container  450:w-[450px] w-[100%]">
      <p>Complete Detail info</p>
      <div className="inside">
        <div style={{ paddingLeft: 10 }} className="location">
          <img src={Maps} />
          <div style={{ paddingLeft: 10 }}>
            <p style={{ marginBottom: 0 }} className="yourcountry">
              Your Country
            </p>
            <p style={{ marginTop: 0 }}>Indonesia</p>
          </div>
        </div>
        <p>Verify your documents</p>
        <p className="subhead">
          Upload your ID and relevant Educational certifications
        </p>
        {/* <p>National ID Card</p> */}
        <div className="links">
         <input type="text" placeholder="National ID Card"></input> <img src={Img} />
        </div>
        <div className="links">
        <input type="text" placeholder="Certificate of being a specialist"></input>   <img src={Camera} />
        </div>
        <div className="links">
        <input type="text" placeholder="Add Linkedin profile link"></input> 
        </div>
        <button className="Button">Save</button>
      </div>
    </div>
  );
}

export default container;
