Meteor.subscribe('posts');
Meteor.subscribe('usuarios');

Template.Perfil.helpers({
  'perfil': function() {
    var id = FlowRouter.getParam('id');
    var user = Meteor.users.findOne({_id: id});
    return user;
  },
  'posts': function() {
    var id = FlowRouter.getParam('id');
    var posts = Posts.find({author: id}).fetch();
    return posts;
  },
  'segue': function() {
    var id = FlowRouter.getParam('id');
    var user = Meteor.users.findOne({_id: id});
    var seguidores = user.profile.seguidores;
    return seguidores.indexOf(Meteor.userId()) !== -1;
  },
  'meuperfil': function() {
    var id = FlowRouter.getParam('id');
    return id !== Meteor.userId();
  }
});

Template.Perfil.events({
  "click .follow": function(evento, template) {
    Meteor.call('follow', FlowRouter.getParam('id'));
  },
  "click .unfollow": function(evento, template) {
    Meteor.call('unfollow', FlowRouter.getParam('id'));
  }
});
