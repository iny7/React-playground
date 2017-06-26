import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'

export default class SVGLine extends Component {
  render () {
    const { startX, startY, endX, endY } = this.props

    const left = Math.min(startX, endX)
    const top = Math.min(startY, endY)
    const width = Math.abs(startX - endX)
    const height = Math.abs(startY - endY)

    // 计算连线
    const mx = endX > startX ? 0 : width
    const my = endY > startY ? 0 : height
    const ll = width - mx
    const ly = height - my

    const wrapperStyle = {
      left: document.body.scrollLeft + left,
      top: document.body.scrollTop + top,
      width: width,
      height: height,
    }

    return (
      <div className="svg-line" style={wrapperStyle}>
        <div className="line"></div>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d={`M${mx},${my} L${ll},${ly}`} stroke="green" strokeWidth="1" strokeLinecap="square" fill="none"></path>
        </svg>
        <div className="target" />
        <div className="handler" onClick={this.selectByHandler} />
      </div>
    )
  }
}
SVGLine.propTypes = {
  startX: PropTypes.number,
  startY: PropTypes.number,
  endX: PropTypes.number,
  endY: PropTypes.number,
}
SVGLine.defaultProps = {
  startX: 40,
  startY: 40,
  endX: 200,
  endY: 200,
}
