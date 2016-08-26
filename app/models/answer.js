import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  votes: DS.attr('number'),
  question: DS.belongsTo('question', {async: true})
});
