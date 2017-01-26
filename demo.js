import React from 'react'
import ReactDom from 'react-dom'
import AutoComplete from './src/components/auto_complete'

ReactDom.render(<AutoComplete inputClass='autocomplete-field' resultsClass='autocomplete-results'
                              mainHolderClass='autocomplete' defaultSearchText='Search...'
                              defaultKeyPresses={3} fetchUrl='http://localhost:8888/data' fetchMethod='POST'
/>, document.getElementById('autocomplete-form'))

