Meteor.subscribe('subjects');

Template.Subjects.helpers({
	subjects: function(){
		return Subjects.find().fetch();
	}
});