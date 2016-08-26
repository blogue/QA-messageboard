import Ember from 'ember';

export default Ember.Route.extend({
  favoritePosts: Ember.inject.service(),
  model() {
    return this.store.findAll('question');
  },
  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  },
  answerCount: Ember.computed('question.answers.length', function(){
    console.log('Yo');
    return this.get('question.answers').length;
  })
});
