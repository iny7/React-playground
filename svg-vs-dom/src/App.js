import React, { Component } from 'react'
import SVGLine from './SVGLine'
import DOMLine from './DOMLine'
import CanvasLine from './CanvasLine'

import './App.css'

const arr = []
for (let i = 0 ; i < 500 ; i ++) {
  const startX = Math.random() * window.innerWidth
  const startY = Math.random() * window.innerHeight
  const endX = Math.random() * window.innerWidth
  const endY = Math.random() * window.innerHeight
  arr.push({ startX, startY, endX, endY })
}

export default class App extends Component {
  componentDidMount () {
    window.addEventListener('scroll', () => {
      this.forceUpdate()
    })
  }

  render() {
    // DOMLine
    // SVGLine
    return (
      <div className="App">
        { false && <CanvasLine data={arr} /> }
        { true && arr.map((pos, i) => <SVGLine key={i} {...pos} />) }
      </div>
    )
  }
}
