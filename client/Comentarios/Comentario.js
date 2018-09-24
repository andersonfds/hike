Template.Comentario.helpers({
  'usernameAuthor': function() {
    var author = Meteor.users.findOne({_id: this.author});
    return author.username;
  }
});
