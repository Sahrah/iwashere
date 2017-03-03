import { Template } from 'meteor/templating';
 
import { Posts } from '../api/tasks.js';
 
import './task.html';
 
Template.post.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Posts.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Posts.remove(this._id);
  },
});
