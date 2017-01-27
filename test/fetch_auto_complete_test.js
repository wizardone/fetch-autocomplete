import 'jsdom-global/register'
import FetchAutoComplete from '../src/components/fetch_auto_complete'

import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'


describe('<FetchAutoComplete />', () => {
  it('returns the proper component structure', () => {
    let wrapper = shallow(<FetchAutoComplete/>)
    expect(wrapper.matchesElement(
      <div className="autocomplete">
        <input type="text" className="autocomplete-field"/>
      </div>)
    ).to.equal(true);
  });

  it('creates an element with the main class', () => {
    expect(shallow(<FetchAutoComplete/>).is('.autocomplete')).to.equal(true)
  });

  it('finds the element with the main class', () => {
    expect(mount(<FetchAutoComplete/>).find('.autocomplete').length).to.equal(1)
  });

  it('does not show the results div by default', () => {
    let wrapper = shallow(<FetchAutoComplete />)
    let resultClass = wrapper.instance().props.resultsClass

    expect(wrapper.find(resultClass).exists()).to.equal(false)
  })

  it('returns the default props', () => {
    const wrapper = shallow(<FetchAutoComplete/>)
    const props = wrapper.instance().props

    expect(props.resultsClass).to.equal('autocomplete-results')
    expect(props.inputClass).to.equal('autocomplete-field')
    expect(props.mainHolderClass).to.equal('autocomplete')
    expect(props.defaultSearchText).to.equal('Search...')
    expect(props.defaultKeyPresses).to.equal(3)
    expect(props.fetchUrl).to.equal('http://localhost:8888/data')
    expect(props.fetchMethod).to.equal('POST')
    expect(props.fetchMode).to.equal('cors')
  })

  it('returns the right initial state', () => {
    const wrapper = shallow(<FetchAutoComplete/>)

    expect(wrapper.state().keyPressed).to.equal(false)
    expect(wrapper.state().showResults).to.equal(false)
    expect(wrapper.state().keyPressedCount).to.equal(0)
    expect(wrapper.state().searchData).to.equal(null)
  })

});
