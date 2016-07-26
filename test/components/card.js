import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import Card from '../../app/scripts/components/card';

describe('<Card />', function() {
  const wrapper = shallow(<Card card="jess" />);
  it('should render a div', () => {
    expect(wrapper.is('div')).to.equal(true);
  });
  it('should have a class of "card"', () => {
    expect(wrapper.hasClass('card')).to.equal(true);
  });
  it('should render the card properties properly', () => {
    expect(wrapper.contains(<span>jess</span>)).to.equal(true);
  });
})
