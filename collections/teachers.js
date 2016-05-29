Teachers = new Mongo.Collection("teachers");

Teachers.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Teachers.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Nombre"
	},
	lastname: {
		type: String,
		label: "Apellido"
	},
	grade: {
		type: String,
		label: "Educación"
	},
	university: {
		type: String,
		label: "Universidad"
	},
	email: {
		type: String,
		label: "Email"
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