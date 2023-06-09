const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db')
//creamos el servidor

const app = express();

//conectamos a la BD
conectarDB();
app.use(cors())
app.use(express.json())
app.use('/api/productos', require('./routes/producto'));
app.use('/api/login', require('./routes/login'));
app.use('/api/empleado', require('./routes/empleado'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})