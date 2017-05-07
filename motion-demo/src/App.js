import React, { Component } from 'react'
import Demo0 from './demo0'
import Demo1 from './demo1'
import Demo2 from './demo2'
import './App.css'

import { Motion, StaggeredMotion, TransitionMotion, spring } from 'react-motion'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {value => <div>{value.x}</div>}
        </Motion>
      {/*
        <Demo0 />
        <TransitionMotionDemo />
        <Demo1 />
      */}
      <Demo2 />
      </div>
    )
  }
}

class TransitionMotionDemo extends Component {
  state = {
    items: [
      { key: 'a', size: 100 },
      { key: 'b', size: 200 },
      { key: 'c', size: 300 }
    ]
  }
  componentDidMount() {
    this.setState({
      items: [
        { key: 'a', size: 100 },
        { key: 'b', size: 200 }
      ], // remove c.
    })
  }
  willLeave() {
    // triggered when c's gone. Keeping c until its width/height reach 0.
    return { width: spring(0), height: spring(0) }
  }
  render() {
    const { items } = this.state
    return (
      <TransitionMotion
        willLeave={this.willLeave}
        styles={items.map(item => ({
          key: item.key,
          style: {width: item.size, height: item.size},
        }))}>
        {interpolatedStyles =>
          // first render: a, b, c. Second: still a, b, c! Only last one's a, b.
          <div>
            {interpolatedStyles.map(config => {
              return <div key={config.key} style={{...config.style, border: '1px solid'}} />
            })}
          </div>
        }
      </TransitionMotion>
    )
  }
}

class TreeBoxes extends Component {
  render () {
    return (
      <StaggeredMotion
        defaultStyles={[{h: 0}, {h: 0}, {h: 0}]}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? {h: spring(100)}
            : {h: spring(prevInterpolatedStyles[i - 1].h)}
        })}>
        {interpolatingStyles =>
          <div>
            {
              interpolatingStyles.map((style, i) => {
                const color = '#' + (Math.random() * 0xFFFFFF >> 0).toString(16)
                return <div key={i} style={{background: color, height: style.h}} />
              })
            }
          </div>
        }
      </StaggeredMotion>
    )
  }
}
