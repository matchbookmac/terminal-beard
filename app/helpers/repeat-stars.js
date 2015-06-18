import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(count) {
  var ratingStars = "";
  for (var i = 0; i < count; i++) {
    ratingStars += '<span>&#9734;</span>';
  }
  return ratingStars.htmlSafe();
});
