import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <form id="form"> 
    <input type="search" id="query" name="q" placeholder="Search..." />
    <button>Search</button>
  </form>
  )
}

export default Header