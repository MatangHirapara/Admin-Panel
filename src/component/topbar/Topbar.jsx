import React, { Component } from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import image_1 from "../images/thumb-1.jpg"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Setting from './Setting';

export class Topbar extends Component {
  render(){
    // const theme = () => {
    //   document.getElementById('bgColor').style.backgroundColor = "white";
    //   const nodeList = document.querySelectorAll("#logo");
    //     for (let i = 0; i < nodeList.length; i++) {
    //     nodeList[i].style.color = "#283142";
    //   } 
    // }

    var colorWell;
    var defaultColor = "#283142";
    window.addEventListener("load", startup, true);

    function startup() {
      colorWell = document.querySelector("#colorWell");
      colorWell.value = defaultColor;
      colorWell.addEventListener("input", updateFirst, false);
      colorWell.addEventListener("change", updateAll, false);
      colorWell.select();
    }

    function updateFirst(event) {
      var p = document.querySelector("#bgColor");
    
      if (p) {
        p.style.backgroundColor = event.target.value;
      }
    }

    function updateAll(event) {
      document.querySelectorAll("#bgColor").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
      });
    }

  return (
    <>
      <div className='topbar' id='bgColor'>
        <div className='topbarWrapper'>
          <div className='topLeft'>
            <span className='logo' id='logo' >lamaadmin</span>
          </div>
          <div className='topRight'>
            <div className='topbarIconContainer' id='logo' >
              <input name='Theme' type="color" id='colorWell'/>
            </div>  
            <div className='topbarIconContainer' id='logo' >
              <NotificationsNoneIcon/>
              <span className='topIconBadge' >2</span>
            </div>
            <div className='topbarIconContainer' id='logo' >
              <LanguageIcon/>
              <span className='topIconBadge' >2</span>
            </div>
              <div className="topbarIconContainer" id='logo'>
                <Setting/>
              </div>
            <img src={image_1} alt="" className='topAvatar' />
          </div>
        </div>
      </div>
    </>
  )
}
}
export default Topbar;