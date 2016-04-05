// Sets up the application-wide layout
// Router.configure({
//   layoutTemplate: 'main'
// });

Router.route('/', {
  name: 'home',
  template: 'home'
});

Router.route('/newMovie', {
  name: 'newMovie',
  template: 'newMovie'
});

Router.route('movie', {
  path: '/movie/:movie_name'
  // waitOn: function() {
  //   return Meteor.subscribe("")
  // }
})
