require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {  dbConnection } = require('./database/config');

//Crear el servidor express
const app = express();

//Configurar cors
app.use(cors());

//Lectura y parseo del body
app.use( express.json());

//Base de datos
dbConnection();


//Rutas
app.use('/api/usuarios', require('./routes/usuarios') );

app.listen( 3000, () => {
    console.log('Servidor corriendo en puerto' + 3000);
});