if (Meteor.isClient) {
  console.log("isClient");

  Template.newMovie.onRendered(function() {
    console.log("onRendered");
    console.log(Meteor.users.find().fetch())
    Meteor.typeahead.inject();
  });

  Template.newMovie.helpers({
    users: function() {
      console.log("users");
      console.log(Meteor.users.find().fetch())

      return Meteor.users.find().fetch().map(function(user) {
        console.log(user);
        return user.emails[0].address
      })
    }
  })

  Template.newMovie.events({
    // Works properly
    'submit form': function(event) {
      // Prevent the page from posting back
      event.preventDefault();

      // Grab values from the form
      let title = event.target.title.value;
      let date = event.target.date.value;
      let chosenBy = event.target.chosenBy.value;

      // Submit the movie to the movies collection
      Movies.insert({
        dateCreated: new Date(),
        createdBy: Meteor.user().emails[0].address,
        chosenBy: chosenBy,
        title,
        watchedOn: date
      }, function() {
        Router.go('/');
      });

      // Clear the form
      event.target.title.value = "";
      event.target.date.value = "";
    }
  });
}
