# react-autocomplete
[![Build Status](https://travis-ci.org/wizardone/fetch-autocomplete.svg?branch=master)](https://travis-ci.org/wizardone/react-autocomplete)

Autocomplete field written in React. A couple of points:
- It uses Json to send data and it expects a json data to be returned
- It uses the Fetch Api.
- It is configurable.

To configure the FetchAutoComplete Component you can pass the following
properties:

```javascript
import { FetchAutoComplete } from 'fetch-autocomplete'

<FetchAutoComplete inputClass='autocomplete-field' resultsClass='autocomplete-results'
              mainHolderClass='autocomplete' defaultSearchText='Search...'
              defaultKeyPresses={3} fetchUrl='http://localhost:8888/data' fetchMethod='POST'
              fetchMode='cors'
/>
```
The options that you definitely want to configure are:
`fetchUrl` => url endpoint
`fetchMode` => 'cors' or 'no-cors', depending on how you use the
autocomplete field

The request format is:
```json
{
  "search": "value"
}
```

The response format needs to look like this:
```json
{
  "data": [
    {"identifier": "title", "value": "mysearch", "url": "http://dummy.com"},
    {"identifier": "title", "value": "searchme", "url": "http://test.com"}
  ]
}
```
Pretty much data is an array of the search results. Currently only the `value`
and `url` are used to display the results. Future versions will use more options ;)
