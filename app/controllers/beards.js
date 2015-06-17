import Ember from 'ember';

export default Ember.Controller.extend({
  newBeard: false,
  selectedType: 'Full Beard',
  types: ['Full Beard', 'Goatee', 'Mustache', 'Chops', 'Sideburns'],
  actions: {
    newBeard: function () {
      this.get('newBeard') ? this.set('newBeard', false) : this.set('newBeard', true);
    },
    submitBeard: function () {
      // var beard =
    }
  }
});
