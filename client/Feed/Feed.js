Template.Feed.onCreated(function(){
  Meteor.subscribe('posts');
  Meteor.subscribe('usuarios');
});

Template.Feed.helpers({
  posts: function() {
    return Posts.find().fetch().reverse();
  }
});
