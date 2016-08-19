import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        topic: this.get('topic'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        answers: [],
      };
      this.sendAction('save', params);
    }
  }
});
