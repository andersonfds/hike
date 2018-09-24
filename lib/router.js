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

FlowRouter.route('/feed', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, query) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Feed'});
  }
});

FlowRouter.route('/perfil/:id', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, query) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Perfil'});
  }
});
