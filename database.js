const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurar body-parser para analizar los cuerpos de las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'juanma',
    password: 'juanma',
    database: 'usuarios'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});

// Ruta para insertar usuario
app.post('/insertar-usuario', (req, res) => {
    const { correo, contraseña } = req.body;
    const query = `INSERT INTO users (email, password) VALUES ('${correo}', '${contraseña}')`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error al insertar usuario:', err);
            res.status(500).send('Error al insertar usuario');
            return;
        }
        console.log('Usuario insertado correctamente.');
        res.sendStatus(200);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
