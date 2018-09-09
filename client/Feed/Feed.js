Template.Feed.helpers({
  posts: function() {
    return Posts.find().fetch();
  }
});
