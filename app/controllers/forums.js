import Ember from 'ember';

export default Ember.Controller.extend({
  newPost: false,
  actions:{
    submit: function(){
      var newPost = this.store.createRecord('post', {
        subject: this.get('subject'),
        body:    this.get('body'),
        author:  this.get('author')
      });
      newPost.save();
      this.setProperties({
        subject: '',
        body:    '',
        author:  ''
      });
      this.set('newPost', false);
      this.transitionToRoute('forums');
    },
    newPost: function(){
      this.get('newPost') ? this.set('newPost', false) : this.set('newPost', true);
    }
  }
});
