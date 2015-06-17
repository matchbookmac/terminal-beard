import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('beard', params.beard_id);
  },
  hideForm: function () {
    var controller = this.get('controller');
    controller.set('newReview', false);
  }.on('deactivate')
});
