var SearchController = Ember.Controller.extend({
  needs: [ 'search/results' ],
  keywordBinding: 'controllers.search/results.keyword'
});

export default SearchController;