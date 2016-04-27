Meteor.methods({
  getFavoritePokemon() {
    console.log("getting favorite pokemon: " + Meteor.settings.public.favoritePokemon)
    return Meteor.settings.public.favoritePokemon
  }
})
