import React from 'react'
import { Motion, spring } from 'react-motion'
import './index.css'

export default class Demo extends React.Component {
  state = {
    open: false
  }

  handleMouseDown = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleTouchStart = (e) => {
    e.preventDefault()
    this.handleMouseDown()
  }

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {value => {
            const { x } = value
            // children is a callback which should accept the current value of
            // `style`
            return <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }}
        </Motion>
      </div>
    )
  }
}
