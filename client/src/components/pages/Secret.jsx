import React, { Component } from 'react'
import funnyMemes from '../../funnyMemes'

export default class Secret extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMeme: false,
    }
  }

  displayMeme = () => {
    if (this.state.showMeme) {
      let randNum = Math.floor(Math.random() * funnyMemes.length)
      let found = funnyMemes.find(meme => {
        return meme.idx === randNum
      })
      console.log(found)

      return (
        <div>
          <img id="funnyPic" src={found.picAdress} alt="test" />
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>
          <button
            id="funnyButton"
            onClick={() => this.setState({ showMeme: !this.state.showMeme })}
          >
            Generate Car Funny
          </button>
        </h2>
        <br></br>
        {this.displayMeme()}
      </div>
    )
  }
}
