# react-autocomplete
[![Build Status](https://travis-ci.org/wizardone/react-autocomplete.svg?branch=master)](https://travis-ci.org/wizardone/react-autocomplete)

Autocomplete field written in React. A couple of points:
- It uses Json to send data and it expects a json data to be returned
- It uses the Fetch Api.
- It is configurable.

The response format needs to look like this:
```json
{
  "data": [
    {"identifier": "title", "value": "mysearch", "url": "http://dummy.com"},
    {"identifier": "title", "value": "searchme", "url": "http://test.com"}
  ]
}
```
