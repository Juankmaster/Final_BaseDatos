const 	express = require('express'),
    		bodyParser = require('body-parser'),
    	  session = require('express-session'),
    	  morgan = require('morgan'),
        RutaUser=require('./rutaUser'),
        RutaEvents=require('./RutaEventos'),
    		app = express()

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(express.static('client'))
        app.use(morgan('dev'))
        app.use('/usuarios', RutaUser)
        app.use('/eventos', RutaEvents)

        app.use(session({
        	secret: '12345',
        	cookie: {maxAge: 72000000},
        	resave: false,
          cookie: {maxAge: 72000000},
        	saveUninitialized: true
        }));

        module.exports = app
