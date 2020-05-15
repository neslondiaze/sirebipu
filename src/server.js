const express = require('express');
const path = require('path');

//TODO: Inicializacion 
const app = express();


//TODO:Configuracion
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


//TODO: Middelawares
app.use(express.urlencoded({extended: false}));


//TODO: Variables globales



//TODO: Routes
app.get('/', (req, res) => {
    res.send('Hola estoy corriendo');
});



//TODO: Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;