import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Posts } from '../api/tasks.js';

import './task.js';
 
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  console.log(Geolocation.currentLocation());
});


Template.body.helpers({
  posts() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter posts
      return Posts.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    // Otherwise, return all of the posts
    return Posts.find({}, { sort: { createdAt: -1 } });
  },
        // Incomplete Posts Counter
    incompleteCount() {
    return Posts.find({ checked: { $ne: true } }).count();
  },
});

// Form Event - Input
Template.body.events({
  'submit .new-post'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var geodata = Geolocation.currentLocation();
    console.log(geodata);
    console.log(geodata.coords);
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const breitengrad = geodata.coords.latitude;
    const laengengrad = geodata.coords.longitude;
    const hoehe = geodata.coords.altitude;
    
 
    // Insert a post into the collection
    Posts.insert({
      text,
      breitengrad,
      laengengrad,
      hoehe,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
    'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});