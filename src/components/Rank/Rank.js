import React from 'react'

const style = {
  marginTop: '3em'
}

const Rank = () => {
  return (
    <div style = {style}>
      <div className = "white f3">
        {'Andrea, your current rank is....'}
      </div>
      <div className = "white f1">
        {'#5'}
      </div>
    </div>
  )
}

export default Rank
