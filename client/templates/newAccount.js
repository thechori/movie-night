if (Meteor.isClient) {
  Template.newAccount.helpers({

  });

  Template.newAccount.events({
    'click #back': function() {
      Router.go('/');
    },

    'form submit': function(event) {
      console.log("Submitting form");
    }
  });

  Template.newAccount.onCreated(function() {
    console.log("created");
  });
}
