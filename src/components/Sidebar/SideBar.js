import React from 'react'
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className="sidebar">
        <img className="logo" src={require("./Logo.png")} alt="Logo" />
        <div className="container">
            <img className="vector" src={require("./Vector.png")} alt="Logo-vector" />
            <p className="title">DASHBOARD</p>
        </div>
        <div className="container-task">
            <img className="hamb" src={require("./hamb.png")} alt="Icon" />
            <p className="title-task">MY TASK</p>
        </div>
    </div>

  )
}

export default SideBar