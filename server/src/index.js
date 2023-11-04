const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Inicializamos la tabla que usaremos
const pool = require("./db");
pool.on("connect", (client) => {
    client
        .query("CREATE TABLE task(id SERIAL PRIMARY KEY, title VARCHAR(255) UNIQUE, description VARCHAR(255))")
        .catch(err => console.log(err))
})

const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors());            // Permite conectar mi dominio de backend con el frontend
app.use(morgan("dev"));     // Permite ver por consola las peticiones que se realizan
app.use(express.json());    // Permite trabajar con JSON para las peticiones

app.use(taskRoutes);        // Permite crear multiples rutas para nuestro backend (APIS)

app.use((err, req, res, next) => {  // Manejar todos los errores del backend solo llamando next() desde las demas partes del backend
    return res.json({
        message: err.message
    })
});

app.listen(4000);
console.log("Server on port 4000");