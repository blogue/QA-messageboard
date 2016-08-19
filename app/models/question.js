import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
