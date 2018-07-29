const Router = require('express').Router();
const Usuario = require('./modeloUser.js')

//Metodo login  usuario en el sistema
Router.post('/login', function(req ,res) {
  let usuario = req.body.email
  let clave = req.body.clave
  let sesion= req.session
Usuario.find({email:usuario, clave:clave}, function(err, usuarioValido){

        if(err){
            res.status(500)
            res.send(err)
        }else{
          if (usuarioValido.length == 1) {
              sesion.id_usuario=usuarioValido[0]['_id']
                res.send("OK")
          }else {
            res.send("Usuario y/o contraseña no valido")

          }
        }
      })
})
//Crear un Usuario
Router.get('/new', function(req ,res) {
  let usuario= new Usuario({
      nombre:'Juan Carlos',
      email:'juank@gmail.com',
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
//Exportar el modulo
module.exports=Router
