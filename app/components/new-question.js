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
        date: Date.now(),
        content: this.get('content'),
        answers: [],
      };
      this.set('postQuestion', false);
      this.sendAction('save', params);
    }
  }
});
