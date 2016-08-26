import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers.length', function(){
    return this.get('question.answers.length');
  })
});
