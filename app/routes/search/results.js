var SearchResultsRoute = Ember.Route.extend({
  model: function(params) {
    this.controllerFor('search').set('keyword', params.keyword);
    return _.range(0, 10).map(function(number){
      return Em.Object.create({
        name: params.keyword + number.toString()
      });
    }); 
  },
  deactivate: function() {
    this.controllerFor('search').set('keyword', '');
  }
});

export default SearchResultsRoute;