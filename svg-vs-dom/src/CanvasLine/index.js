import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'

export default class CanvasLine extends Component {
  componentDidMount () {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.strokeWidth = 1
    ctx.strokeStyle = 'lightblue'
    this.ctx = ctx

    const { data } = this.props
    this.draw(data)
  }
  componentDidUpdate () {
    const { data } = this.props
    this.draw(data)
  }
  draw (data) {
    const { ctx } = this

    data.forEach(pos => {
      const { startX, startY, endX, endY } = pos
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
    })
    ctx.stroke()
  }
  render () {
    const { startX, startY, endX, endY } = this.props

    // const left = Math.min(startX, endX)
    // const top = Math.min(startY, endY)
    // const width = Math.abs(startX - endX)
    // const height = Math.abs(startY - endY)

    const wrapperStyle = {
      left: document.body.scrollLeft + 50,
      top: document.body.scrollTop + 50,
      width: window.innerWidth / 2,
      height: window.innerHeight / 2
    }

    // 计算连线
    // const theta = Math.atan2(height, width) / Math.PI * 360
    // const transform = `rotate(${theta}deg)`

    return <canvas className="canvas-line" ref="canvas" width={window.innerWidth} height={window.innerHeight} style={wrapperStyle} />
  }
}
CanvasLine.propTypes = {
  startX: PropTypes.number,
  startY: PropTypes.number,
  endX: PropTypes.number,
  endY: PropTypes.number,
}
CanvasLine.defaultProps = {
  startX: 40,
  startY: 40,
  endX: 200,
  endY: 200,
}
