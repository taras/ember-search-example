var SearchRoute = Ember.Route.extend({
  actions: {
    search: function(keyword) {
      this.transitionTo('search.results', keyword);
    }
  }
});

export default SearchRoute;