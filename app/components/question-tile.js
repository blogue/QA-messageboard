import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.service(),
  answerCount: Ember.computed('question.answers.length', function(){
    return this.get('question.answers.length');
  }),
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    addToFavorites(favorite) {
      console.log('working');
      this.get('favoritePosts').add(favorite);
      console.log(this.get('favoritePosts.favorites'));
    },
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
