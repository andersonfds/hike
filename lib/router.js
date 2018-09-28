FlowRouter.route('/', {
  action: function(params, QueryParams) {
    if (Meteor.userId() == null) {
      BlazeLayout.render('LayoutPrincipal', {main: 'Inicio'});
    } else {
      BlazeLayout.render('LayoutPrincipal', {main: 'Feed'});
    }
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

FlowRouter.route('/explorar', {
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
