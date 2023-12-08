import React from "react"
import "./container.css"
import Maps from "../../assets/Maps.png"
import Img from "../../assets/Rectangle 285.png"
import Camera from "../../assets/camera.png"

function container(){
    
return (<div className="container">
<p>Complete Detail info</p>
<div className="inside">
    <div style={{paddingLeft:10}} className="location">
        <img src={Maps}/>
        <div style={{paddingLeft:10}}>

        <p style={{marginBottom:0}} className="yourcountry">Your Country</p>
        <p style={{marginTop:0}}>Indonesia</p>
        </div>
    </div>
    <p>
        Verify your documents
    </p>
    <p className="subhead">Upload your ID and relevant Educational certifications</p>

    <div className="links"><p>National ID Card</p> <img src={Img}/></div>
    <div className="links"><p>Certificate of being a specialist</p> <img src={Camera}/></div>
    <div className="links"><p>Add Linkedin profile link</p> </div>
   <button className="Button">Save</button>
   
</div>
</div>)
}

export default container