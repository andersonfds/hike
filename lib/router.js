FlowRouter.route('/', {
  action: function(params, QueryParams) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Inicio'});
  }
})

FlowRouter.route('/sobre/', {
  action: function(params, QueryParams) {
    BlazeLayout.render('LayoutPrincipal', {main: 'Sobre'});
  }
});
