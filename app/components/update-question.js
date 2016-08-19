import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question) {
      var params = {
        topic: this.get('topic'),
        author: this.get('author'),
        date: new Date(Date.now()).toString(),
        content: this.get('content'),
      };
      this.sendAction('update', question, params);
    }
  }
});
