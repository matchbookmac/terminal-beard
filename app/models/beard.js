import DS from 'ember-data';

export default DS.Model.extend({
  name:    DS.attr('string'),
  picture: DS.attr('string'),
  type:    DS.attr('string'),
  date:    DS.attr('date'),
  length:  DS.attr('number'),
  width:   DS.attr('number'),
  girth:   DS.attr('number'),
  density: DS.attr('number'),
  reviews: DS.hasMany('review')
});
