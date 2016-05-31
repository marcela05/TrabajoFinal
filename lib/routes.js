FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/teachers/new', {
	name: 'teacher',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewTeacher'});
	}
});

FlowRouter.route('/teachers', {
	name: 'teachers',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Teachers'});
	}
});

FlowRouter.route('/subjects/new', {
	name: 'subject',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewSubject'});
	}
});

FlowRouter.route('/subjects', {
	name: 'subjects',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Subjects'});
	}
});