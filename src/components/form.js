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

  onKeyUp = (event) => {
    console.log(event.keyCode)
    if(event.keyCode == 8){
      // Backspace
      this.decrementKeyPresses()
    } else {
      let incrementedKeyPress = this.state.keyPressedCount += 1
      let searchValue = event.target.value

      this.incrementKeyPresses(incrementedKeyPress)
      this.showResults(incrementedKeyPress, searchValue)
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

  showResults = (incrementedKeyPress, searchValue) => {
    let { defaultKeyPresses } = config

    if(incrementedKeyPress >= defaultKeyPresses) {
      this.sendSearchRequest(searchValue)
      this.setState({showResults: true})
    }
  }

  sendSearchRequest = (value) => {
    let { fetchUrl, fetchMethod } = config
    fetch(fetchUrl, {
      method: fetchMethod,
      mode: 'cors'
    }).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    let { inputClass, resultsClass, mainHolderClass, defaultSearchText } = config
    let showResults = this.state.showResults

    return (
      <div className={mainHolderClass}>
        <input type="text" placeholder={defaultSearchText} className={inputClass} onKeyUp={(e) => this.onKeyUp(e)} />
        {showResults ? (<div className={resultsClass}>Results here</div>) : null}
      </div>
    )
  }
}
