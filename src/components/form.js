import React from 'react'
import ReactDom from 'react-dom'
import { config } from '../config.js'
import FetchException from '../fetch_exception'

export default class AutoComplete extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      keyPressed: false,
      showResults: false,
      keyPressedCount: 0,
      searchData: null
    }
  }

  onKeyUp = (event) => {
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
    }
  }

  sendSearchRequest = (value) => {
    let { fetchUrl, fetchMethod } = config
    let request = new Request(fetchUrl, {
      method: fetchMethod,
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        search: value
      })
    })

    fetch(request).then((response) => {
      return response.json()
    }).then((json) => {
      let results = json
      if(results['data'] == undefined){
        throw new FetchException("JSON response must have a 'data' key in it. Please refer to the README")
      }
      this.setState({searchData: results['data'], showResults: true})
    }).catch((err) => {
      console.log(err)
    })
  }

  render () {
    let { inputClass, resultsClass, mainHolderClass, defaultSearchText } = config
    let { showResults, searchData } = this.state

    return (
      <div className={mainHolderClass}>
        <input type="text" placeholder={defaultSearchText} className={inputClass} onKeyUp={(e) => this.onKeyUp(e)} />
        {showResults ?
          (<div className={resultsClass}>
            <ul>
            {searchData.map((data, index) => {
              return (<li key={index}>{data.value}</li>)
            })}
            </ul>
           </div>) :
          null}
      </div>
    )
  }
}
