import AutoComplete from '../src/components/form'

import React from 'react'
import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'


describe('<AutoComplete />', () => {

  it('renders with the proper class name', () => {
    expect(shallow(<AutoComplete />).contains(<div className="autocomplete" />)).to.equal(true);
  });

  it('renders with the proper class name', () => {
    expect(shallow(<AutoComplete />).is('.autocomplete')).to.equal(true)
  });

  it('renders with the proper class name', () => {
    expect(mount(<AutoComplete />).find('.autocomplete').length).to.equal(1)
  });

});
