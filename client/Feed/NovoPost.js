Template.NovoPost.onCreated(function(){
  this.imagem = new ReactiveVar();
});

Template.NovoPost.events({
  "submit form": function(evento, template) {
      evento.preventDefault();
      var texto = evento.target.texto;
      Meteor.call("inserirPost", texto.value, template.imagem.get());
      texto.value = null;
    },
    "change .myFileInput": function(evento, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                if (!err) {
                    template.imagem.set("/cfs/files/images/" + fileObj._id);
                }
            });
        });
    }
});
