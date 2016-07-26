import { expect } from 'chai';
import Card from '../../app/scripts/models/card';

describe('Card model', function() {
  var card = new Card();
  it('should have default values', () => {
    expect(card.attributes).to.deep.equal({name: '', powers: ['healing'], age: 0})
  });
  it('should have an addPower function', () => {
    expect(card.addPower).to.be.a('function');
  });
  it('should add Powers properly', () => {
    card.addPower('invisibility');
    expect(card.get('powers')).to.deep.equal(['healing', 'invisibility']);
  });
  it('should have a removePower function', () => {
    expect(card.removePower).to.be.a('function');
  });
  it('should remove powers properly', () => {
    card.removePower('healing');
    expect(card.get('powers')).to.deep.equal(['invisibility']);
  });
})
