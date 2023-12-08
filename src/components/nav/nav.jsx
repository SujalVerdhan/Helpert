import React from "react"
import logo from "../../assets/Group 889.svg"
import Navig from "../../assets/Navigation.png"
import Avatar from "../../assets/Avatar.png"
import Bell from "../../assets/bell.png"
import Beel from "../../assets/beel2.png"
import "./nav.css"
function nav(){
    return (<div className="nav">
     <img src={logo}/>
     <div className="mid">
     <img src={Navig}/>
        <p>Become a specialist</p>
     </div>
     <div className="last">
     <div className="login">
     <img style={{marginRight:10}} className="avatar" src={Avatar}/>
        <p>Yondu</p>
        </div>
        <img className="side" src={Bell}/>
        <img className="side" src={Beel}/>
     </div>
    </div>)
}

export default nav;