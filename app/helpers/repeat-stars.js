import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(count) {
  var ratingStars = "";
  for (var i = 0; i < count; i++) {
    ratingStars += '<span>X</span>';
  }
  return ratingStars.htmlSafe();
});
