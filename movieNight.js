Movies = new Mongo.Collection("movies");

if (Meteor.isClient) {
  // Global helper
  Template.registerHelper('formatDateGlobal', (date) => {
    return moment(date).format('MM-DD-YYYY');
  });

  // Helpers specific to the body
  Template.body.helpers({
    movies: function() {
      return Movies.find({});
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Spinning up server..");
  });
}
