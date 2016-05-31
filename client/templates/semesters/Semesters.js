Meteor.subscribe('semesters');

Template.Semesters.helpers({
	semesters: function(){
		return Semesters.find().fetch();
	}
});