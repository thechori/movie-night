if (Meteor.isClient) {
  Template.registerHelper('isCurrentlyEditing', function() {
    return Session.get('isEditing')
  });
}
