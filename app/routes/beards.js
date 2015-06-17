import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('beard');
  },
  hideForm: function () {
    var controller = this.get('controller');
    controller.set('newBeard', false);
  }.on('deactivate')
});
