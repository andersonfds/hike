Template.Post.helpers({
  'user': function() {
    return Meteor.users.findOne({_id: this.author});
  },
  'puxarCurtidas': function() {
    var curtidas = this.curtidas.length;
    return curtidas
  },
  'usuarioCurtiu': function() {
    var curtiram = this.curtidas;
    var indice = curtiram.indexOf(Meteor.userId());
    return indice > -1;
  },
  'puxarComentarios': function() {
    return Comentarios.find({id: this._id}).fetch();
  },
  'podeApagar': function() {
    return this.author === Meteor.userId();
  }
});

Template.Post.events({
  'click .botao-curtir': function(evento, template) {
    Meteor.call('curtirPost', template.data._id);
  },
  'click .botao-descurtir': function(evento, template) {
    Meteor.call('descurtirPost', template.data._id);
  },
  'click .botao-remover': function(evento, template) {
    Meteor.call('removerPost',template.data._id);
  }
});
