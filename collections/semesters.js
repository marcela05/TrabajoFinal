Semesters = new Mongo.Collection("semesters");

Semesters.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Semesters.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Nombre",
		allowedValues: ['Primer semestre', 
			'Segundo semestre',
			'Tercer semestre',
			'Cuarto semestre',
			'Quinto semestre',
			'Sexto semestre',
			'Septimo semestre',
			'Octavo semestre',
			'Noveno semestre',
			'Decimo semestre']
	},
	startDate: {
		type: Date,
		label: "Fecha de inicio"
	},
	endDate: {
		type: Date,
		label: "Fecha de fin"
	},
	program: {
		type: String,
		label: "Programa",
		autoform: {
	 		value: "Ingeniería de Sistemas"
	 	}
	},
	createdBy: {
	    type: String,
	    autoValue: function() {
	    	return this.userId;
	 	},
	 	autoform: {
	 		type: "hidden"
	 	}
	},
	craetedAt: {
		type: Date,
		label: "Creado",
		autoValue: function() {
			return new Date();
		},
		autoform: {
	 		type: "hidden"
	 	}
	}
}));