import 'jsdom-global/register'
import AutoComplete from '../src/components/auto_complete'

import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'


describe('<AutoComplete />', () => {

  it('returns the proper component structure', () => {
    const wrapper = shallow(<AutoComplete />)

    expect(wrapper.matchesElement(
      <div className="autocomplete">
        <input type="text" className="autocomplete-field"/>
      </div>)
    ).to.equal(true);
  });

  it('creates an element with the main class', () => {
    expect(shallow(<AutoComplete />).is('.autocomplete')).to.equal(true)
  });

  it('finds the element with the main class', () => {
    expect(mount(<AutoComplete />).find('.autocomplete').length).to.equal(1)
  });

  it('returns the right initial state', () => {
    const wrapper = shallow(<AutoComplete />)

    expect(wrapper.state().keyPressed).to.equal(false)
    expect(wrapper.state().showResults).to.equal(false)
    expect(wrapper.state().keyPressedCount).to.equal(0)
    expect(wrapper.state().searchData).to.equal(null)
  })

});
