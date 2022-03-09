import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <form className="form" id="form"> 
    <input className="input" type="search" id="query" name="q" placeholder="Search..." />
    </form>
  )
}

export default Header