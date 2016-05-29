FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/teachers', {
	name: 'teachers',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Teachers'});
	}
});

FlowRouter.route('/subjects', {
	name: 'subjects',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Subjects'});
	}
});