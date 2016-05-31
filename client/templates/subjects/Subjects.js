Meteor.subscribe('subjects');
Meteor.subscribe('semesters');

Template.Subjects.helpers({
	subjects: function(){
		return Subjects.find().fetch();
	}
});

Template.registerHelper("semesters", function() {
	var semesters = Semesters.find().fetch();
	var options = [];

	for (var i = 0; i < semesters.length; i++) {
		var semester = {label: semesters[i].name, value: semesters[i]._id};
		options.push(semester);
	};

    return options;
});