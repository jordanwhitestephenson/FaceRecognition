import React from 'react'
import './FaceRecognition.css'



const FaceRecognition = ({imageURL, box}) => {
  return (
    <div  className = "center ma">
    <div className = "absolute mt2 br3 b--white-90 bw2 ba b--solid">
    <img id = "inputImage"  className = "responsive" alt= "" src = {imageURL}  width= "150px" height= "auto"/>
    <div className = "bounding-box" style = {{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    </div>
    </div>
  )
}

export default FaceRecognition
