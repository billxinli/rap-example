RapExample.CustomersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('customer');
  },
  setupController: function(controller, model) {
    window.mc = model
    controller.set('model', model);
  }
});
