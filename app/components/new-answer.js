import Ember from 'ember';

export default Ember.Component.extend({
  postAnswer: false,
  actions: {
    showAnswerForm: function() {
      this.set('postAnswer', true);
    },
    save(){
      var params = {
        author: this.get('author'),
        date: Date.now(),
        content: this.get('content'),
        votes: 0,
        question: this.get('question'),
      };
      this.set('postAnswer', false);
      this.sendAction('save', params);
    }
  }
});
