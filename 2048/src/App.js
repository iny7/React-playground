import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const row = 4
const column = 4

const getBoard = () => {
  const board = Array(row)
  Array(column).fill().forEach((_, i) => {
    const rowArr = new Array(column)
    rowArr.forEach((_, i) => {
      rowArr[i] = 0
    })
    board[i] = rowArr
  })
  return board
}

const generateNumber = (board) => {
  while (true) {
    const rowNum = Math.random(row) >> 0
    const colNum = Math.random(column) >> 0
    if (board[rowNum][colNum] == 0) {
      const number = Math.random > 0.5 ? 4: 2
      board[rowNum][colNum] = number
      return { rowNum, colNum, number }
    }
  }
}

const hasSpace = (board) => {
  for (let i = 0 ; i < 4 ; i ++) {
    for (let j = 0 ; j < 4 ; j ++) {
      if (board[i][j] == 0) {
        return true
      }
    }
  }
  return false
}

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      board: getBoard()
    }
  }
  componentDidMount() {
    // document.addEventListener('')
  }

  render () {
    const { board } = this.state
    console.log(board)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <main>
          <section className="board">
            {
              board.map((row, i) => {
                return (
                  <div key={i} className="row">
                    {
                      row.map((v, i) => {
                        return <div key={i} className="grid">{v}</div>
                      })
                    }
                  </div>
                )
              })
            }
          </section>
        </main>
      </div>
    )
  }
}
