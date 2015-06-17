import Ember from 'ember';

export default Ember.Controller.extend({
  newReview: false,
  actions: {
    addReview: function () {
      this.get('newReview') ? this.set('newReview', false) : this.set('newReview', true);
    },
    delete: function() {
      this.get('model').destroyRecord();

      this.transitionToRoute('beards');
    }
  }
});
