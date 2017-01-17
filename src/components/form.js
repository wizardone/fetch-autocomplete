import React from 'react'
import ReactDom from 'react-dom'
import { config } from '../config.js'

export default class AutoComplete extends React.Component {

  constructor () {
    super()
    this.state = {keyPressed: false, showResults: false}
  }

  onClick = (event) => {
    console.log(event)
  }

  onKeyPress = (event) => {
    console.log(event)
  }

  render () {
    let { inputClass, resultsClass } = config
    return (
      <div>
        <input type="text" className={inputClass} onClick={(e) => this.onClick(e)} onKeyPress={(e) => this.onKeyPress(e)}/>
        <div className={resultsClass}></div>
      </div>
    )
  }
}

ReactDom.render(<AutoComplete />, document.getElementById('autocomplete-form'))
