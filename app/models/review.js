import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body:   DS.attr('string'),
  rating: DS.attr('number'),
  beard:  DS.belongsTo('beard', {async: true}),
});
