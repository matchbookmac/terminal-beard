import Ember from 'ember';

export default Ember.Controller.extend({
  newBeard: false,
  selectedType: 'Full Beard',
  types: ['Full Beard', 'Goatee', 'Mustache', 'Chops', 'Sideburns'],
  actions: {
    newBeard: function () {
      this.get('newBeard') ? this.set('newBeard', false) : this.set('newBeard', true);
    },
    submitBeard: function () {
      var beard = this.store.createRecord('beard', {
        name:    this.get('name'),
        picture: this.get('picture'),
        type:    this.get('selectedType'),
        date:    new Date(this.get('startDate')),
        length:  this.get('length'),
        width:   this.get('width'),
        girth:   this.get('girth'),
        density: this.get('density'),
        avgRating: 'No Reviews Yet'
      });
      beard.save();
      this.setProperties({
        name:    '',
        picture: '',
        type:    '',
        date:    '',
        length:  '',
        width:   '',
        girth:   '',
        density: ''
      });
      this.set('newBeard', false);
      this.transitionToRoute('beards');
    }
  }
});
