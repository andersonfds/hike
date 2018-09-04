FlowRouter.route('/', {
  action: function(params, QueryParams) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Inicio'});
  }
})

FlowRouter.route('/sobre', {
  action: function(params, QueryParams) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Sobre'});
  }
});

FlowRouter.route('/contato', {
  action: function(params, query) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Contato'});
  }
})
