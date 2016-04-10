if (Meteor.isClient) {
  // GLOBAL helper
  Template.registerHelper('formatDateGlobal', (date) => {
    return moment(date).format('MM-DD-YYYY');
  });

  // On created
  Template.home.onCreated(function homeOnCreated() {
    Meteor.subscribe('movies');
  });

  // Helpers specific to the body
  Template.home.helpers({
    movies: function() {
      return Movies.find({}, {
        // Sort by date
        sort: {
          watchedOn: -1
        }
      });
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Spinning up server..");
  });
}
