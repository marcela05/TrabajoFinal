Subjects = new Mongo.Collection("subjects");

Subjects.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Schedule = new SimpleSchema({
	day: {
		type: String,
		label: "Día"
		// allowedValues: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
	},
	hour: {
		type: String,
		label: "Hora",
		autoform:{
	      placeholder: 'Ejm.: 08:00 - 10:00, 14:00 - 18:00',
	    }
	}
});

Subjects.attachSchema(new SimpleSchema({
	code: {
		type: String,
		label: "Código"
	},
	name: {
		type: String,
		label: "Nombre"
	},
	descripction: {
		type: String,
		label: "Descripción"
	},
	semester: {
		type: String,
		label: "Semestre"
	},
	program: {
		type: String,
		label: "Programa"
	},
	time: {
		type: String,
		label: "Jornada",
		allowedValues: ['Diurno', 'Nocturno']
	},
	status: {
		type: Boolean,
		label: "Activa"
	},
	teacher: {
		type: String,
		label: "Profesor"
	},
	schedule: {
		type: [Schedule]
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