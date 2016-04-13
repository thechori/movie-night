Template.movieInfo.onCreated(function() {
  Session.set('isEditing', false);
});

Template.movieInfo.helpers({
  removeMovie: function() {
    // Store movie data
    let movie = Movies.findOne(this.params.id);

    console.log("Removing movie..");
    console.log(movie);
  },

  toggleEdit: function() {
    console.log("toggleEdit");
    // If editing, stop
    if (Session.get('isEditing')) {
      console.log("Stopping edit");
      Session.set('isEditing', false)
    }
    // If not editing, begin
    else {
      console.log("Now editing");
      Session.set('isEditing', true)
    }
  }
});

Template.movieInfo.events({
  'click #edit': function(event) {
    event.preventDefault();

    if (Session.get("isEditing")) {
      // If currently editing, stop
      Session.set("isEditing", false);
      console.log("stopping edit");

      // Save the current page data, replace the <p>'s with <input> fields
      // title

      // chosenBy

      // watchedOn


    } else {
      // If not editing, start
      Session.set("isEditing", true);
      console.log("starting edit");
    }
  },

  'click #cancel-edit': function(event) {

  },

  'click #save': function(event) {

  },

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
