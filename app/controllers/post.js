import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitComment: function(){
      var post = this.get('model');
      var comment = this.store.createRecord('comment',{
        author: this.get('author'),
        body: this.get('body')
      });
      comment.save().then(function(){
        post.get('comments').pushObject(comment);
        post.save();
      });
      this.setProperties({
        author: '',
        body:   ''
      });
    },
    deleteComment: function (comment) {
      var post = this.get('model');
      comment.destroyRecord();
      this.transitionToRoute('post', post.id);
    },
    deletePost: function() {
      this.get('model').destroyRecord();

      this.transitionToRoute('forums');
    }
  }
});
