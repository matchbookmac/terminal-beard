import Ember from 'ember';

export default Ember.Controller.extend({
  newReview: false,
  needs: 'beard',
  actions: {
    addReview: function () {
      this.get('newReview') ? this.set('newReview', false) : this.set('newReview', true);
    },
    submitReview: function() {
      var beard = this.get('model');
      var review = this.store.createRecord('review', {
        author: this.get('author'),
        body: this.get('body'),
      });
      review.save();
      beard.get('reviews').pushObject(review);
      beard.save();
      this.set('newReview', false);
      this.transitionToRoute('beard', beard.id);
    },
    delete: function() {
      this.get('model').destroyRecord();

      this.transitionToRoute('beards');
    }
  }
});
