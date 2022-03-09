import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <form className="form" id="form"> 
    <div className="container-input">
     <input className="input" type="search" id="query" name="q" placeholder="Search..." />
      <img className="bell" src={require("./bell.png")} alt="Icon" />
      <img className="avatar" src={require("./Ellipse93.png")} alt="Icon" />
    </div>
    <div className="Switcher">
    <img className="bell" src={require("./Swicter.png")} alt="Icon" />
    <img className="button-header" src={require("./Button.png")} alt="Icon" />
    </div>
    </form>
  )
}

export default Header