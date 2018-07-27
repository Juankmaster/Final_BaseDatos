const Router = require('express').Router();
const Usuario = require('./modeloUser.js')

//Metodo para consultar un usuario en el sistema
Router.get('/login', function(req ,res) {
  let usuario = req.body.email
  let clave = req.body.clave
  //let sesion = req.sesion
Usuario.find({email:usuario, clave:clave}).exec(function(err,usuarioValido){
        if(err){
            res.status(500)
            res.send(err)
        }else{
          if (usuarioValido.length == 1) {
              //sesion.id_usuario = usuarioValido[0]['_id']
              res.send("Usuario y/o contraseña no validosss")

          }else {
            res.send("OK")
          }
        }
    })
})

//Crear un Usuario
Router.get('/new', function(req ,res) {
  let usuario= new Usuario({
      id_usuario:Math.floor(Math.random()*50),
      nombre:'julio javier',
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
