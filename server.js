const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Cambia esto a tu usuario de MySQL
  password: "root", // Cambia esto a tu contraseña de MySQL
  database: "menuDigital", // Cambia esto al nombre de tu base de datos
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a MySQL:", err.message);
    return;
  }
  console.log("Conexión exitosa a MySQL");
});

// Ruta para obtener todos los elementos del menú
app.get("/api/hamburguesasMenu", (req, res) => {
    console.log("Solicitud recibida");
  db.query("SELECT * FROM hamburguesa", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener el menú de hamburguesas" });
    }

    res.json(results);
  });
});

// Ruta para obtener todos los elementos del menú hotDogs
app.get("/api/hotDogsMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM hotdogs", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de hotdogs" });
  }

  res.json(results);
});
});

// Ruta para obtener todos los elementos del menú carnes
app.get("/api/carnesMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM carnes", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de carnes" });
  }

  res.json(results);
});
});

// Ruta para obtener todos los elementos del menú alitas
app.get("/api/alitasMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM alitas", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de alitas" });
  }

  res.json(results);
});
});

// Ruta para obtener todos los elementos del menú enchiladas
app.get("/api/enchiladasMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM enchiladas", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de enchiladas" });
  }

  res.json(results);
});
});

// Ruta para obtener todos los elementos del menú tortas
app.get("/api/tortasMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM tortas", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de tortas" });
  }

  res.json(results);
});
});

// Ruta para obtener todos los elementos del menú sincronizadas
app.get("/api/sincMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM sincronizadas", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de sincronizadas" });
  }

  res.json(results);
});
});

// Ruta para obtener todos los elementos del menú bebidas
app.get("/api/bebidasMenu", (req, res) => {
  console.log("Solicitud recibida");
db.query("SELECT * FROM bebidas", (err, results) => {
  if (err) {
    return res.status(500).json({ error: "Error al obtener el menú de bebidas" });
  }

  res.json(results);
});
});

// Ruta para agregar un nuevo elemento al menú
app.post("/api/hamburguesas", (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  db.query(
    "INSERT INTO menu (nombre, precio, descripcion) VALUES (?, ?, ?)",
    [nombre, precio, descripcion],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error al agregar el platillo" });
      }
      res.status(201).json({ id: result.insertId, nombre, precio, descripcion });
    }
  );
});

// Ruta para actualizar un elemento del menú
app.put("/api/hamburguesas/:id", (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  db.query(
    "UPDATE menu SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?",
    [nombre, precio, descripcion, req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al actualizar el platillo" });
      }
      res.json({ message: "Platillo actualizado correctamente" });
    }
  );
});

// Ruta para eliminar un elemento del menú
app.delete("/api/hamburguesas/:id", (req, res) => {
  db.query("DELETE FROM menu WHERE id = ?", [req.params.id], (err) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el platillo" });
    }
    res.json({ message: "Platillo eliminado correctamente" });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
