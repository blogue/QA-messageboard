import Ember from 'ember';

export default Ember.Component.extend({
  favoritePosts: Ember.inject.service(),
  answerCount: Ember.computed('question.answers.length', function(){
    return this.get('question.answers.length');
  }),
  actions: {
    addToFavorites(favorite) {
      console.log('working');
      this.get('favoritePosts').add(favorite);
      console.log(this.get('favoritePosts.favorites'));
    },
  }
});
