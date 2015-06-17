import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  body:    DS.attr('string'),
  author:  DS.attr('string'),
  date:    DS.attr('date')
});
