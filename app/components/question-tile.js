import Ember from 'ember';

export default Ember.Component.extend({
  answerCount: Ember.computed('question.answers.length', function(){
    return this.get('question.answers.length');
  }),
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    upVote: function(answer) {
      answer.set('votes', answer.get('votes') + 1);
      answer.save();
    },
    downVote: function(answer) {
      answer.set('votes', answer.get('votes') -1);
      answer.save();
    }
  }
});
