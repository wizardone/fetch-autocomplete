import React from 'react'
import ReactDom from 'react-dom'
import { config } from '../config.js'

export default class AutoComplete extends React.Component {

  constructor () {
    super()
    this.state = {
      keyPressed: false,
      showResults: false,
      keyPressedNumber: 0
    }
  }

  onClick = (event) => {
    console.log(event)
  }

  onKeyPress = (event) => {
    let incrementedKeyPress = this.state.keyPressedNumber += 1

    this.incrementKeyPresses(incrementedKeyPress)
    this.showResults(incrementedKeyPress)
  }

  incrementKeyPresses = (incrementedKeyPress) => {
    this.setState({keyPressedNumber: incrementedKeyPress})
  }

  showResults = (incrementedKeyPress) => {
    let { defaultKeyPresses } = config

    if(incrementedKeyPress >= defaultKeyPresses) {
      this.setState({showResults: true})
    }
  }

  render () {
    let { inputClass, resultsClass } = config
    let showResults = this.state.showResults

    return (
      <div>
        <input type="text" className={inputClass} onClick={(e) => this.onClick(e)} onKeyPress={(e) => this.onKeyPress(e)}/>
        {showResults ? (<div className={resultsClass}>Results here</div>) : null}
      </div>
    )
  }
}

ReactDom.render(<AutoComplete />, document.getElementById('autocomplete-form'))
