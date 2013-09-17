function Routes() {
  this.resource('search', {path: '/search'}, function(){
    this.route('results', {path: ':keyword'});
  });
}

export default Routes;
