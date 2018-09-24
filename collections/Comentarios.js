Comentarios = new Mongo.Collection('comentario');

Meteor.methods({
  'inserirComentario': function(id, texto) {
    if (Meteor.userId() !== null) {
      Comentarios.insert({
        texto: texto,
        id: id,
        author: Meteor.userId()
      });
    }
  }
});
