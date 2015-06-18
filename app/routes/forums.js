import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  },
  hideForm: function () {
    var controller = this.get('controller');
    controller.set('newPost', false);
  }.on('deactivate')

});
