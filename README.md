# react-autocomplete
[![Build Status](https://travis-ci.org/wizardone/react-autocomplete.svg?branch=master)](https://travis-ci.org/wizardone/react-autocomplete)

Autocomplete field written in React. A couple of points:
- It uses Json to send data and it expects a json data to be returned
- It uses the Fetch Api.
- It is configurable.

To configure the AutoComplete Component you can pass the following
properties:

```javascript
<AutoComplete inputClass='autocomplete-field' resultsClass='autocomplete-results'
              mainHolderClass='autocomplete' defaultSearchText='Search...'
              defaultKeyPresses={3} fetchUrl='http://localhost:8888/data' fetchMethod='POST'
/>
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
