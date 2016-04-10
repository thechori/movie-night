Template.movieInfo.helpers({
  removeMovie: function() {
    // Store movie data
    let movie = Movies.findOne(this.params.id);

    console.log("Removing movie..");
    console.log(movie);
  }
});

Template.movieInfo.events({
  'click #delete': function(event) {
    // This is the id for the movie
    console.log(this._id);

    var confirm = window.confirm("Are you sure you want to remove this movie?");
    if (confirm) {
      Movies.remove(this._id, function() {
        Router.go('/');
      });
    }
  }
});
