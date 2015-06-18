import Ember from 'ember';

export default Ember.Controller.extend({
  newReview: false,
  needs: 'beard',
  selectedRating: '1',
  ratings: ['1','2','3','4','5'],
  actions: {
    addReview: function () {
      this.get('newReview') ? this.set('newReview', false) : this.set('newReview', true);
    },
    submitReview: function() {
      var beard = this.get('model');
      var allRatings = beard.get('reviews').forEach( function(review) { return review.get('ratings') });
      var review = this.store.createRecord('review', {
        author: this.get('author'),
        body: this.get('body'),
        rating: this.get('selectedRating')
      });
      var sum = parseInt(this.get('selectedRating'));
      allRatings.forEach(function (rating) {
        sum += parseInt(rating.get('rating'));
      });
      var avgRating = Math.ceil(sum/(parseInt(allRatings.get('length')) + 1));
      beard.set('avgRating', avgRating).save();

      review.save().then(function() {
        beard.get('reviews').pushObject(review);
        beard.save();
      });
      this.set('newReview', false);

      this.setProperties({
        author: "",
        body:   "",
        rating: this.get('selectedRating')
      });

      this.transitionToRoute('beard', beard.id);
    },
    delete: function() {
      this.get('model').destroyRecord();

      this.transitionToRoute('beards');
    },
    deleteReview: function(review) {
      review.destroyRecord();
      var beard = this.get('model');
      var sum = 0;
      var allRatings = beard.get('reviews').forEach( function(review) { return review.get('ratings') });
      allRatings.forEach(function (rating) {
        sum += parseInt(rating.get('rating'));
      });
      var avgRating = sum/(parseInt(allRatings.get('length')));
      if (avgRating) {
        beard.set('avgRating', avgRating).save();
      } else {
        beard.set('avgRating', 'No Reviews Yet').save();
      }
      beard.save();
      this.transitionToRoute('beard', beard.id);
    }

  }
});
