import React from 'react'
import Logo from '../Logo/Logo'
import "./Navigation.css"
const navStyle = {
  display: "flex",
  justifyContent: "center"
}
const Navigation = ( {onRouteChange, isSignedIn} ) => {
    if (isSignedIn) {
      return (
        <nav style = {navStyle} className="nav dt w-100 bg-washed-blue border-box pa3 ph5-ns">
        <div className="dtc v-mid mid-gray link dim">
          <Logo/>
        </div>
        <div className = "w-75-l">
          <p className="link dim black  f3 center tc" title="Home">Jordan's Face Recognition</p>
        </div>

        <div className="dtc v-mid tr">
          <p className="link dim dark-gray f6 f5-ns dib"
          title="Contact"
          onClick ={function() {onRouteChange('signout')} }
          >Sign Out</p>
        </div>
      </nav>
      )
    }
    else {
      return (
        <nav style = {navStyle} className="nav dt w-100 bg-washed-blue border-box pa3 ph5-ns">
        <div className="dtc v-mid mid-gray link dim w-25-l">
          <Logo/>
        </div>
      <p className="link dim black  f3 center tc db w-50-l" title="Home">Jordan's Face Recognition</p>
        <div className="db dtc-l v-mid tc tr-l w-25">
          <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          title="Sign In"
          onClick ={function() {onRouteChange('signin')} }>Sign in </p>
          <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
          title="Register"
          onClick ={function() {onRouteChange('register')} }> Register </p>
        </div>
      </nav>
      )
    }


}

export default Navigation
