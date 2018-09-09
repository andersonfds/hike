Posts = new Mongo.Collection("posts");

Meteor.methods({
  "inserirPost": function(texto) {
    Posts.insert({
      texto: texto,
      author: Meteor.userId()
    });
  }
});
