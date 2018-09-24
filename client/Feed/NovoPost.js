Template.NovoPost.events({
  "submit form": function(evento, template) {
      evento.preventDefault();
      var texto = evento.target.texto;
      Meteor.call("inserirPost", texto.value);
      texto.value = null;
    }
});
