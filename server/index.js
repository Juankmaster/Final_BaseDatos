    const mongoose=require('mongoose') ,
          express=require('express'),
          app = require('./app'),
          PORT = process.env.PORT || 8082

//Conexion con la base de datos
mongoose.connect('mongodb://localhost:27017/agenda1',(err, res) => {
	if (err) return console.log('Error en la conexión con la base de datos '+ err)
	console.log('Conexión establecida con la base de datos -agenda1- en el puerto:27017')});

 app.listen(PORT,function () {
  console.log("Servidor corriendo en el puerto:http://localhost: "+PORT)
})
