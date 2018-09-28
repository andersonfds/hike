import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

AccountsTemplates.configure({
  postSignUpHook: function(userId, info) {
    Meteor.users.update(userId, {
      $set: {
        "profile.seguidores": [],
        "profile.seguindo": []
      }
    });
  }
});

Meteor.publish('posts', function(){
  var user = Meteor.users.findOne({_id: Meteor.userId()});

  var autores = user.profile.seguindo
  autores.push(Meteor.userId())
  return Posts.find({author: {$in: autores}});
});

Meteor.publish('usuarios', function(){
  return Meteor.users.find({}, {fields: {
    'username': true,
    '_id': true,
    'profile': true
  }});
});

Meteor.publish('comentarios',function(idDoPost){
  return Comentarios.find({id: idDoPost});
})
