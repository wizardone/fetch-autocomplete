import React from 'react'
import ReactDom from 'react-dom'
import { config } from '../config.js'

export default class AutoComplete extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      keyPressed: false,
      showResults: false,
      keyPressedCount: 0
    }
  }

  onClick = (event) => {
  }

  onKeyDown = (event) => {
    if(event.keyCode == 8){
      // Backspace
      this.decrementKeyPresses()
    } else {
      let incrementedKeyPress = this.state.keyPressedCount += 1

      this.incrementKeyPresses(incrementedKeyPress)
      this.showResults(incrementedKeyPress)
    }
  }

  incrementKeyPresses = (incrementedKeyPress) => {
    this.setState({keyPressedCount: incrementedKeyPress})
  }

  decrementKeyPresses = () => {
    let oldKeyPressedCount = this.state.keyPressedCount
    if(oldKeyPressedCount > 0){
      this.setState({keyPressedCount: oldKeyPressedCount -= 1})
    }
  }

  showResults = (incrementedKeyPress) => {
    let { defaultKeyPresses } = config

    if(incrementedKeyPress >= defaultKeyPresses) {
      this.setState({showResults: true})
    }
  }

  render () {
    let { inputClass, resultsClass, mainHolderClass, defaultSearchText } = config
    let showResults = this.state.showResults

    return (
      <div className={mainHolderClass}>
        <input type="text" placeholder={defaultSearchText} className={inputClass} onClick={(e) => this.onClick(e)} onKeyDown={(e) => this.onKeyDown(e)}/>
        {showResults ? (<div className={resultsClass}>Results here</div>) : null}
      </div>
    )
  }
}
