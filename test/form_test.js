import 'jsdom-global/register'
import AutoComplete from '../src/components/form'

import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'


describe('<AutoComplete />', () => {

  it('has an element with the proper class name', () => {
    const wrapper = shallow(<AutoComplete />)

    expect(wrapper.contains(<div className="test" />)).to.equal(true);
  });

  it('exists an element with this class', () => {
    expect(shallow(<AutoComplete />).is('.autocomplete')).to.equal(true)
  });

  it('does something??', () => {
    expect(mount(<AutoComplete />).find('.autocomplete').length).to.equal(1)
  });

});
