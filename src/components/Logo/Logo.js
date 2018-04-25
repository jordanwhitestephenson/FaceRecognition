import React from 'react'
import Tilt from 'react-tilt'
import "./Logo.css"
import brain from './brain-icon-png-12.png'

const Logo = () => {
  return (
    <div className = " mt0">
    <Tilt className = "Tilt br2 shadow-2" options = {{ max: 55 }} style = {{height: 50, width: 50 }}>
    <div className = "Tilt-innner"> <img src = {brain} alt = "logo"/> </div>
    </Tilt>
    </div>
  )
}

export default Logo
