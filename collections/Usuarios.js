Meteor.methods({
  'follow':function(id) {
    if (id !== Meteor.userId()) {
      Meteor.users.update(Meteor.userId(), {
        $addToSet: {
          'profile.seguindo': id
        }
      });
      Meteor.users.update(id, {
        $addToSet: {
          'profile.seguidores': Meteor.userId()
        }
      });  
    }
  },
  'unfollow':function(id) {
    if (id !== Meteor.userId()) {
      Meteor.users.update(Meteor.userId(), {
        $pull: {
          'profile.seguindo': id
        }
      });
      Meteor.users.update(id, {
        $pull: {
          'profile.seguidores': Meteor.userId()
        }
      });
    }
  }
});
