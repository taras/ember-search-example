var ResultsSearchController = Ember.ArrayController.extend({
  needs: ['search'],
  content: function(){
    console.log( this.get('controllers.search.keyword') );
  }.property('controllers.search.keyword')
});

export default ResultsSearchController;