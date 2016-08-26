import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    showEdit: function() {
      this.set('editQuestion', true);
    },
    update(question) {
      var params = {
        topic: this.get('topic'),
        author: this.get('author'),
        date: Date.now(),
        content: this.get('content'),
      };
      this.set('editQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
