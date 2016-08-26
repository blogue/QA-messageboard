import Ember from 'ember';
import moment from 'moment';

export function dateDisplay(params) {
  var timestamp = params[0] / 1000;
  var date = moment.unix(timestamp).format("MM-DD-YYYY h:mm a");
  return date;
}

export default Ember.Helper.helper(dateDisplay);
