  const mongoose = require('mongoose')
	const Schema = mongoose.Schema
//Modelo Usuario
	let UserSchema = new Schema({
      // id_usuario:{type:Number,unique:true, required:true},
      nombre: {type: String},
  	  email: {type: String, unique: true,required: true, lowercase: true},
  	  clave: {type: String, required: true, lowercase: true}
	})
//Exportar el modulo
  let UserModel = mongoose.model('Usuario', UserSchema)
  module.exports = UserModel
