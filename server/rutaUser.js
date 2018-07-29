const Router = require('express').Router();
const Usuario = require('./modeloUser.js')

//Metodo para consultar un usuario en el sistema
Router.post('/login', function(req ,res) {
  let usuario = req.body.email
  let clave = req.body.clave
  let sesion= req.session
Usuario.find({email:usuario, clave:clave}, function(err,usuarioValido){
//  req.session = usuarioValido[0]["email"];
  //sesion.user= usuarioValido._id
   console.log("hola" )
        if(err){
            res.status(500)
            res.send(err)
        }else{
          if (usuarioValido.length == 1) {
            req.sesion_id=usuarioValido[0]['_id']
                res.send("OK")

          }else {
            res.send("Usuario y/o contraseña no validosss")
          }
        }

})
})
//Crear un Usuario
Router.get('/new', function(req ,res) {
  let usuario= new Usuario({
      id_usuario:Math.floor(Math.random()*50),
      nombre:'javier velasquez',
      email:'javier@gmail.com',
      clave:'12345'
  })
usuario.save(function(error) {
      if (error) {
          res.status(500)
          res.json(error)
      }
      res.send("Usuario creado")
  })

})
module.exports=Router
