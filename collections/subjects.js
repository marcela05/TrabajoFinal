Subjects = new Mongo.Collection("subjects");

Subjects.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Schedule = new SimpleSchema({
	day: {
		type: String,
		label: "Día",
		allowedValues: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
	},
	hourStart: {
		type: String,
		label: "Hora inicio",
		allowedValues: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']
	},
	hourEnd: {
		type: String,
		label: "Hora fin",
		allowedValues: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
	},
	schedule: {
		type: String,
		label: "Jornada",
		allowedValues: ['Diurna', 'Nocturna'] 
	}
});

Teacher = new SimpleSchema({
	teacher: {
		type: String,
		label: "Profesor",
		autoform: {
            options: function () {
                return Teachers.find().map((object) => ({label: object.name + " " + object.lastname, value: object._id}));
            }
        }
	},
	schedule: {
		type: Schedule,
		label: "Horario"
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
	description: {
		type: String,
		label: "Descripción"
	},
	semester: {
		type: String,
		label: "Semestre"
	},
	diurnal: {
		type: Boolean,
		label: "Jorna diurna"
	},
	nocturnal: {
		type: Boolean,
		label: "Jorna nocturna"
	},
	teacher: {
		type: [Teacher]
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