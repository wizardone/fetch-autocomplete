import React from 'react';
import ReactDom from 'react-dom';

export default class AutoCompleteForm extends React.Component {

  render() {
    return (
      <div>Form</div>
    )
  }
}

ReactDom.render(<AutoCompleteForm />, document.getElementById("autocomplete-form"))
