var ResultsSearchRoute = Ember.Route.extend({

  model: function(params) {
    return _.range(0, 10).map(function(number){
      return Em.Object.create({
        name: params.keyword + number.toString()
      }) 
    }); 
  },
  serialize: function(keyword) {
    return {keyword: keyword}
  }

});

export default ResultsSearchRoute;