Template.SideNav.events({
	'click li': function(e){
		e.preventDefault();
	    var id = "#" + this.title;
	    var idIcon = "#" + this.title + "-angle";
	    
	    if (e.currentTarget.getAttribute('class') === 'subitem') {
	    	var item  = $('.subitem-info-active');
	    	item.removeClass('subitem-info-active');
	    	
	    	$("#" + this.name).addClass('subitem-info-active');
	    	FlowRouter.go(this.path);
	    	
	    	e.stopPropagation();
	    } else {
	    	$(id).slideToggle();	

	    	var item  = $('.subitem-info-active');
	    	item.removeClass('subitem-info-active');
	    	
	    	if($(idIcon).hasClass('fa-angle-left')) {
	    		$(idIcon).removeClass('fa-angle-left');
	    		$(idIcon).addClass('fa-angle-down');
	    	} else {
	    		$(idIcon).addClass('fa-angle-left');
	    		$(idIcon).removeClass('fa-angle-down');
	    	}
	    }
	}
});


Template.SideNav.helpers({

	collections: function () {
		var items = [
			{
				title: 'Profesores',
				subitems: [
					{	
						text: 'Nuevo',
						icon: 'fa fa-user-plus',
						name: 'teacher',
						path: '/admin/teachers/new'
					},
					{
						text: 'Ver todos',
						icon: 'fa fa-users',
						name: 'teachers',
						path: '/admin/teachers'

					}
				]				
			},
			{
				title: 'Materias',
				subitems: [
					{	
						text: 'Nuevo',
						icon: 'fa fa-user-plus',
						name: 'subject',
						path: '/admin/subjects/new'
					},
					{
						text: 'Ver todos',
						icon: 'fa fa-users',
						name: 'subjects',
						path: '/admin/subjects'

					}
				]
			},
			{
				title: 'Semestres',
				subitems: [
					{	
						text: 'Nuevo',
						icon: 'fa fa-user-plus',
						name: 'semester',
						path: '/admin/semesters/new'
					},
					{
						text: 'Ver todos',
						icon: 'fa fa-users',
						name: 'semesters',
						path: '/admin/semesters'

					}
				]
			}
		];
		Session.set('menu', items);
		return items;
	}	
});
