import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePost: function() {
      this.get('model').destroyRecord();

      this.transitionToRoute('forums');
    }
  }
});
