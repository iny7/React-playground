import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'

export default class DOMLine extends Component {
  render () {
    const { startX, startY, endX, endY } = this.props

    const left = Math.min(startX, endX)
    const top = Math.min(startY, endY)
    const width = Math.abs(startX - endX)
    const height = Math.abs(startY - endY)

    const wrapperStyle = {
      left: document.body.scrollLeft + left,
      top: document.body.scrollTop + top,
    }

    // 计算连线
    const theta = Math.atan2(height, width) / Math.PI * 360
    const transform = `rotate(${theta}deg)`

    return (
      <div className="dom-line" style={wrapperStyle}>
        <div className="line" style={{ width, height, transform }} />
        <div className="target" />
        <div className="handler" onClick={this.selectByHandler} />
      </div>
    )
  }
}
DOMLine.propTypes = {
  startX: PropTypes.number,
  startY: PropTypes.number,
  endX: PropTypes.number,
  endY: PropTypes.number,
}
DOMLine.defaultProps = {
  startX: 40,
  startY: 40,
  endX: 200,
  endY: 200,
}
