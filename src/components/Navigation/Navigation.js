import React from 'react'
import Logo from '../Logo/Logo'
import "./Navigation.css"
const navStyle = {
  display: "flex",
  justifyContent: "center"
}
const Navigation = () => {
  return (
    <nav style = {navStyle} class="nav dt w-100 bg-washed-blue border-box pa3 ph5-ns">
    <div class="dtc v-mid mid-gray link dim">
      <Logo/>
    </div>
    <a class="link dim black  f3 center tc  db" href="#" title="Home">Face Recognition</a>
    <div class="dtc v-mid tr">
      <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">Sign Up/In</a>
    </div>
  </nav>
)
}

export default Navigation
