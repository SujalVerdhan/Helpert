import React,{useState} from "react"
import logo from "../../assets/Group 889.svg"
import Navig from "../../assets/Navigation.png"
import Avatar from "../../assets/Avatar.png"
import Bell from "../../assets/bell.png"
import Beel from "../../assets/beel2.png"
import "./nav.css"
function Nav(){
   const [ison,setison]=useState(false);
    return (<div className="nav">
     <img src={logo}/>
     <div className="mid">
     <img src={Navig}/>
        <p>Become a specialist</p>
     </div>
     <button className="sidelogin" onClick={()=>{ setison(prevvalue=>!prevvalue)
     }}>Click</button>
     <ul style={{display:ison?"flex":"none",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="dialog">
      <li >Profile</li>
      <li>Setting</li>
      <li className="logout">Logout</li>
     </ul>
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

export default Nav;