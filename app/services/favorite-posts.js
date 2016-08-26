import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],

  add(favorite) {
    if(!this.get('favorites').contains(favorite)) {
      this.get('favorites').pushObject(favorite);
    }
  }
});
