const Router = require('express').Router();
const Eventos = require('./modeloEventos.js')

// Obtener todos los eventos de un usuario
Router.get('/cargar_eventos', function(req, res) {
    sesionUser = req.session.id_usuario
    Eventos.find({id_usuario:sesionUser}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

// Agregar a un Evento a un usuario
Router.post('/nuevo_evento', function(req, res) {
    let evento = new Eventos({
        id_usuario: req.session.id_usuario,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end
    })
    evento.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

// Eliminar evento por su id
Router.get('/eliminar_evento/:id', function(req, res) {
    let eventoID = req.query._id;
    //req.params.id
    Eventos.remove({userId: eventoID}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

//Funcion para actualizar evnto
Router.post('/actualizar_evento/:id', function(req, res) {
  let eventoID = req.query._id,
      start = req.body.start,
      end = req.body.end
          Evento.update({_id: eventoID}, {
            start: start,
            end: end
          }, (err) => {
            if (err) {
              return res.status(500).send({message: 'No se pudo actualizar el evento. (status:500)'})
            }else{
              res.send('Evento actualizado correctamente')
            }
          })
})

//Funcion para recurso no existente
// Router.all('/', function(req, res) {
//   return res.send({message: 'Error al mostrar el recurso solicitado.'}).end()
// })

module.exports = Router
