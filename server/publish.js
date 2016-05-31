Meteor.publish('teachers', function (){
	return Teachers.find();
});

Meteor.publish('subjects', function (){
	return Subjects.find();
});

Meteor.publish('semesters', function (){
	return Semesters.find();
});