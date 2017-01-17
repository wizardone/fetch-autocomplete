import React from 'react'
import ReactDom from 'react-dom'
import { config } from '../config.js'

export default class AutoComplete extends React.Component {

  constructor () {
    super()
  }

  onClick = (event) => {
    console.log(event)
  }

  render () {
    let { inputClass } = config
    return (
      <input type="text" className={inputClass} onClick={(e) => this.onClick(e)}/>
    )
  }
}

ReactDom.render(<AutoComplete />, document.getElementById('autocomplete-form'))
