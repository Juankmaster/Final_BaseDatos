const 	express = require('express'),
    		bodyParser = require('body-parser'),
    	 // session = require('express-session'),
        RutaUser=require('./rutaUser'),
        RutaEvents=require('./RutaEventos'),
    		app = express()

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(express.static('client'))
        app.use('/usuarios', RutaUser)
        app.use('/eventos', RutaEvents)

        // app.use(session({
        // 	secret: '123456',
        // 	cookie: {maxAge: 72000000},
        // 	resave: false,
        // 	saveUninitialized: true
        // }));

        module.exports = app
