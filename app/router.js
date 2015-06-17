import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about', { path: '/' });
  this.resource('forums', function(){
    this.resource('post', { path: ':post_id' });
  });
  this.resource('beards', function () {
    this.resource('submit-beard', { path: 'new' });
  })
});

export default Router;
