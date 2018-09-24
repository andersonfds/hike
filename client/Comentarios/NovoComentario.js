Template.NovoComentario.events({
  'submit form': function(evento,template) {
    evento.preventDefault();
    var comentario = evento.target.texto;
    Meteor.call('inserirComentario', template.data._id, comentario.value);
    comentario.value = null;
  }
});
