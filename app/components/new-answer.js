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
        date: new Date(Date.now()).toString(),
        content: this.get('content'),
        question: this.get('question'),
      };
      this.set('postAnswer', false);
      this.sendAction('save', params);
    }
  }
});
