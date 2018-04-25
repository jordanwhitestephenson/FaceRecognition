import React from 'react'
import './ImageLinkForm.css'
const preLine = {
  whiteSpace: "pre-line"
}

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className = "">
      <p className = "f3 light-blue">
      {"This Magic Brain will detect faces in your pictures."}
      <p style ={preLine}></p>
      {"Go ahead, paste an image-url, and see what happens!"}

      </p>
      <div className = "center">
      <div className ="form pa4 br3 shadow-5 center">
        <input  className = "f4 pa2 w-70 center" type = "text" onChange= {onInputChange}/>
        <button
        className = "w-30 grow link f4 link ph3 pv2 dib white bg-light-purple"
        onClick={onButtonSubmit}>Detect</button>
      </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
