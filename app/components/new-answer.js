import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        author: this.get('author'),
        date: new Date(Date.now()).toString(),
        content: this.get('content'),
        question: this.get('question'),
      };
      this.sendAction('save', params);
    }
  }
});
