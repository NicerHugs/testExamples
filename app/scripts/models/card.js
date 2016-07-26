import Backbone from 'backbone';
import _ from 'underscore';

export default Backbone.Model.extend({
  defaults: {
    name: '',
    age: 0,
    powers: ['healing']
  },
  addPower: function(power) {
    this.set('powers', this.get('powers').concat(power));
  },
  removePower: function(power) {
    this.set('powers', _.without(this.get('powers'), power));
  }
});
