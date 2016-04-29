var imdb = require('imdb-api');

Template.movieInfo.onCreated(function() {
  Session.set('isEditing', false);

  var movie;
  imdb.getReq({
    name: 'The Toxic Avenger'
  }, function(err, things) {
    movie = things;
  });
  console.log(movie);
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
    } else {
      // If not editing, start
      Session.set("isEditing", true);
    }
  },

  'click #cancel-edit': function(event) {
    console.log("Cancelling edit");
    Session.set("isEditing", false);
  },

  'click #save': function(event) {
    // Submit new data to database
    let newTitle = $('#title').val();
    let newChosenBy = $('#chosenBy').val();
    let newWatchedOn = $('#watchedOn').val();

    Movies.update(this._id, {
      title: newTitle,
      chosenBy: newChosenBy,
      watchedOn: newWatchedOn,
      lastEditedOn: new Date()
    });

    Session.set("isEditing", false);
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
