Posts = new Mongo.Collection("posts");

Meteor.methods({
  "inserirPost": function(texto, imagem) {
    if (Meteor.userId() !== null && texto) {
      Posts.insert({
        texto: texto,
        author: Meteor.userId(),
        curtidas: [],
        imagem: imagem
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
  },
  "removerPost": function(id) {
    if(Meteor.userId() != null) {
      Posts.remove(id);
    }
  }
});
