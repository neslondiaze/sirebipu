const express = require('express');
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const path = require('path');

//TODO: Inicializacion 
const app = express();


//TODO:Configuracion
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//TODO: Middelawares
app.use(express.urlencoded({extended: false}));


//TODO: Variables globales



//TODO: Routes
app.get('/', (req, res) => {
    res.render('index');
});



//TODO: Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;