if (Meteor.isClient) {
  console.log("isClient");

  Template.newMovie.events({
    // Works properly
    'submit form': function(event) {
      event.preventDefault();

      console.log("submitting form from Template.newMovie.events")

      // Grab values from the form
      let title = event.target.title.value;
      let date = event.target.date.value;

      // Submit the movie to the movies collection
      Movies.insert({
        dateCreated: new Date(),
        createdBy: Meteor.user().emails[0].address,
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

  Template.newMovie.helpers({
    handleSubmit: function(event) {
      event.preventDefault();
      console.log("submitting the form!");
      console.log(event);
    }
  });

}
