import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const clarifiapp = new Clarifai.App({apiKey: 'bc7a9e494ded4ac5ba5eec5ffa250b47'});

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }

  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage');
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    console.log(box)
    this.setState({
      box: box
    })
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    clarifiapp.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response))
    .catch(err => console.log(err)))
  }
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Particles className="particles" params={particleOptions} style={{
          width: '100%'
        }}/>
      <div className = "pa2" >
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box = {this.state.box}imageURL={this.state.imageURL}/>
      <Footer/>
      </div>
    </div>
    )
  }
}

export default App;
