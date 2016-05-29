Meteor.publish('teachers', function (){
	return Teachers.find();
});

Meteor.publish('subjects', function (){
	return Subjects.find();
});