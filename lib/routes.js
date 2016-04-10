Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/newMovie', {
  name: 'newMovie',
  template: 'newMovie'
});

Router.route('/movie/:id', {
  // Render the movieInfo template
  template: 'movieInfo',
  // Pass data to the template
  data: function() {
    // Grab id from parameter and run query
    return Movies.findOne(this.params.id)
  }
});
