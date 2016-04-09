Router.configure({
  // Wait on the following subscriptions before rendering the
  // page to ensure the data is present
  // waitOn: function() {
  //   return [
  //     Meteor.subscribe("movies")
  //   ]
  // }
})

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
    console.log(this.params.id + " page");
    // Grab id from parameter and run query
    return Movies.findOne(this.params.id)
  }
});
