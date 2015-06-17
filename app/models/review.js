import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body:   DS.attr('string'),
  beard:  DS.belongsTo('beard'),
});
