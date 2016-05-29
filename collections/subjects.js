Subjects = new Mongo.Collection("subjects");

Subjects.allow({
	insert: function(userId, doc) {
		return !!userId;
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
		label: "Activa",
	    autoform: {
	      	type:"switch"
	    }
	},
	teacher: {
		type: String,
		label: "Profesor"
	}
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