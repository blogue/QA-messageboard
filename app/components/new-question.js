import Ember from 'ember';

export default Ember.Component.extend({
  postQuestion: false,
  actions: {
    showPostForm: function() {
      this.set('postQuestion', true);
    },
    save() {
      var params = {
        topic: this.get('topic'),
        author: this.get('author'),
        date: new Date(Date.now()).toString(),
        content: this.get('content'),
        answers: this.get('answers'),
      };
      this.set('postQuestion', false);
      this.sendAction('save', params);
    }
  }
});
