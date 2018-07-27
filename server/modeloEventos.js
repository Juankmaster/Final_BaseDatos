const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Modelo Eventos
var	EventoSchema = new Schema({
	id_usuario: {type: Schema.ObjectId, ref: "Usuario" },
	//userId:{type:Number,required:true},
	title: {type: String, required: true},
	start: {type: String, required: true},
	end: {type: String, required: false}
})
//Exportar el modulo
let EventoModel=mongoose.model('Evento', EventoSchema)
  module.exports = EventoModel
