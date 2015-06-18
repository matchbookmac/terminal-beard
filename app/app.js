import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
// import Repeat from './node_modules/handlebars-helper-repeat';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

// var helper = require('node_modules/handlebars-helper-repeat/index.js');
// var moment = require('moment');

Ember.deprecate = function(){};

loadInitializers(App, config.modulePrefix);

export default App;
