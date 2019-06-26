
const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

/*
Middleware: Es una instrucción o un Callbak que se va a ejecutar 
siempre no importa que URL es la quela persona pida.

Un middleware es un bloque de código que se ejecuta entre la petición 
que hace el usuario (request) hasta que la petición llega al servidor.
https://devcode.la/tutoriales/middlewares-en-nodejs/
*/
app.use (express.static( __dirname + '/public') );

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');


/* app.get('/', (req, res) => {
    let salida = {
        nombre: 'Edwin',
        edad: 32,
        url: req.url
    }
    //res.send('Hola Mundo')
    res.send(salida);
}); */

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'eDwin quinTero'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


// app.get('/data', (req, res) => {
//    res.send(`Hola data`);
// });
 
// app.listen(8080)

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }.`);
})