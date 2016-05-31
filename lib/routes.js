FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/admin', {
	name: 'subjects',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Subjects'});
	}
});

FlowRouter.route('/admin/teachers/new', {
	name: 'teacher',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewTeacher'});
	}
});

FlowRouter.route('/admin/teachers', {
	name: 'teachers',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Teachers'});
	}
});

FlowRouter.route('/admin/subjects/new', {
	name: 'subject',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewSubject'});
	}
});

FlowRouter.route('/admin/subjects', {
	name: 'subjects',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Subjects'});
	}
});

FlowRouter.route('/admin/semesters/new', {
	name: 'semester',
	action() {
		BlazeLayout.render('MainLayout', {main: 'NewSemester'});
	}
});

FlowRouter.route('/admin/semesters', {
	name: 'semesters',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Semesters'});
	}
});