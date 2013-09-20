var SearchResultsRoute = Ember.Route.extend({

  model: function(params) {
    this.set('keyword', params.keyword);
    return _.range(0, 10).map(function(number){
      return Em.Object.create({
        name: params.keyword + number.toString()
      });
    }); 
  },
  setupController: function( controller, models ) {
    controller.set('content', models);
    controller.set('keyword', this.get('keyword'));
  },
  deactivate: function() {
    this.set('controller.keyword', '');
  }
});

export default SearchResultsRoute;