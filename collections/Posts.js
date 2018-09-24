Posts = new Mongo.Collection("posts");

Meteor.methods({
  "inserirPost": function(texto) {
    if (Meteor.userId() !== null && texto) {
      Posts.insert({
        texto: texto,
        author: Meteor.userId(),
        curtidas: []
      });
    }
  },
  "curtirPost": function(id) {
    if (Meteor.userId() !== null) {
      Posts.update(id, {
        $addToSet: {
          curtidas: Meteor.userId()
        }
      });
    }
  },
  "descurtirPost": function(id) {
    if(Meteor.userId() != null) {
      Posts.update(id, {
        $pull: {
          curtidas: Meteor.userId()
        }
      })
    }
  }
});
