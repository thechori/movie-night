Template.movieEdit.events({
  'click #save': function() {
    // Update the movie with the new information
    Movies.update({

    });
  },

  'click #delete': function() {
    var confirm = window.confirm("Are you sure you want to delete this movie?");
    if (confirm) {
      Movies.remove(this._id, function() {
        Router.go('/');
      });
    }
  }
});

Template.movieEdit.helpers({
  
});
