Template.Feed.events({
  "submit form": function(evento, template) {
    evento.preventDefault();
    var texto = event.target.texto;
    Posts.insert({
      texto: texto.value
    });
    texto.value = null;
  }
});

Template.Feed.helpers({
  posts: function() {
    return Posts.find().fetch();
  }
});
