// Footer.js
import './Estilo/estilo1.css';  // Importa los estilos globales



import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Footer() {
  return (
    <footer>
        <h2 id="foot1">The King</h2>
        <p id="foot2">Restaurant</p>
        <p id="cel"><div class="iconoF" id="iconCel"/> Cel: 767 117 5953</p>
        <p id="Ubicacion"><div class="iconoF" id="iconUb"/>Ubicación: J. Inocente Lugo pte 6, Ciudad Altamirano, México</p>
    </footer>
  );
}

function Header() {
  return(
    <div id="logo" onclick="window.location.href='index.html'"></div>
  );
}

// Nuevo componente para mostrar el menú
function Hamburguesas() {
  const [menu, setMenu] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Hamburguesas...');
    fetch('http://localhost:5000/api/hamburguesasMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoH"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}

function Hotdogs() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente HotDogs...');
    fetch('http://localhost:5000/api/hotDogsMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoHD"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}


function Carnes() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Carnes...');
    fetch('http://localhost:5000/api/carnesMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoCT"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}


function Alitas() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Alitas...');
    fetch('http://localhost:5000/api/alitasMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoA"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}


function Enchiladas() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Enchiladas...');
    fetch('http://localhost:5000/api/enchiladasMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoE"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}


function Tortas() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Tortas...');
    fetch('http://localhost:5000/api/tortasMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoT"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}

function Sinc() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Sinc...');
    fetch('http://localhost:5000/api/sincMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoS"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}


function Bebidas() {
  const [menu2, setMenu2] = useState([]); // Estado para almacenar los datos del menú

  // Consumir los datos del backend
  useEffect(() => {
    console.log('Montando el componente Bebidas...');
    fetch('http://localhost:5000/api/bebidasMenu')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`); // Lanza un error si el servidor responde con un código no exitoso
        }
        return response.json();
      })
      .then((data) => setMenu2(data)) // Guardar los datos en el estado
      .catch((error) => {
        console.error('Error al obtener el menú:', error);
        alert(`Error al obtener el menú: ${error.message}`); // Mostrar mensaje más detallado
      });
  }, []); // Solo se ejecuta una vez al montar el componente
  return (
    <div class="menu3">
      {menu2.map((item) => (
          <div key={item.id} className="producto">
            <img
              //src={item.foto} // Imagen dinámica o predeterminada
              //alt={item.nombre}
              className="fotoProducto"
              id={"fotoB"+item.id}
            />
            <h4 className="titProducto">{item.nombre}</h4>
            <div className="descProducto">
              <p>{item.descripcion}</p>
            </div>
            <div className="divPro">
              <p className="precioProducto">
                <b>${item.precio}</b>
              </p>
              <button className="botonAgregar botonAgregar1" data-producto={item.nombre} data-precio={item.precio}>Agregar al pedido</button>
            </div>
          </div>
        ))}
    </div>
  );
}


// Renderizar el componente
ReactDOM.render(<Footer />, document.getElementById('footerr'));
ReactDOM.render(<Header />, document.getElementById('header'));

// Renderiza Hamburguesas si el contenedor existe
const hamburguesasContainer = document.getElementById('menuHamburguesas');
if (hamburguesasContainer) {
  ReactDOM.render(<Hamburguesas />, hamburguesasContainer);
  hamburguesasContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

// Renderiza Hotdogs si el contenedor existe
const hotdogsContainer = document.getElementById('menuHotDogs');
if (hotdogsContainer) {
  ReactDOM.render(<Hotdogs />, hotdogsContainer);
  hotdogsContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

const carnesContainer = document.getElementById('menuCarnes');
if (carnesContainer) {
  ReactDOM.render(<Carnes />, carnesContainer);
  carnesContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

const alitasContainer = document.getElementById('menuAlitas');
if (alitasContainer) {
  ReactDOM.render(<Alitas />, alitasContainer);
  alitasContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

const enchiladasContainer = document.getElementById('menuEnchiladas');
if (enchiladasContainer) {
  ReactDOM.render(<Enchiladas />, enchiladasContainer);
  enchiladasContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

const tortasContainer = document.getElementById('menuTortas');
if (tortasContainer) {
  ReactDOM.render(<Tortas />, tortasContainer);
  tortasContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

const sincContainer = document.getElementById('menuSinc');
if (sincContainer) {
  ReactDOM.render(<Sinc />, sincContainer);
  sincContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}

const bebidasContainer = document.getElementById('menuBebidas');
if (bebidasContainer) {
  ReactDOM.render(<Bebidas />, bebidasContainer);
  bebidasContainer.addEventListener("click", (event) => {
    crearPedido(event);
  });
}




function crearPedido(event){
  if (event.target.classList.contains("botonAgregar1")) {
    const producto = event.target.dataset.producto;
    const precio = parseFloat(event.target.dataset.precio);

    // Llamar a la función de pedido.js para agregar el producto
    agregarProductoAlPedido(producto, precio);
  }
}


// Elementos del DOM
const listaPedido = document.getElementById("lista-pedido");
//const listaPedido = document.querySelectorAll(".lista-pedido")
// Pedido almacenado como un objeto
let pedido = {};

// Cargar el pedido desde Local Storage al iniciar la página
function cargarPedido() {
  const pedidoGuardado = localStorage.getItem("pedido");
  if (pedidoGuardado) {
    pedido = JSON.parse(pedidoGuardado); // Convertir de JSON a objeto
    actualizarPedido(); // Mostrar los productos en la lista
  }
}

// Guardar el pedido en Local Storage
function guardarPedido() {
  localStorage.setItem("pedido", JSON.stringify(pedido)); // Convertir el objeto a JSON
}

// Función para actualizar la lista de pedidos
function actualizarPedido() {
  listaPedido.innerHTML = ""; // Limpiar la lista actual
  let total = 0;

  Object.keys(pedido).forEach((producto) => {
    const { cantidad, precio } = pedido[producto];
    total += cantidad * precio;

    const item = document.createElement("li");

    // Crear botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.style.marginRight = "3px";
    botonEliminar.style.verticalAlign = "middle";
    botonEliminar.style.alignContent = "center";
    botonEliminar.style.height="10px"
    botonEliminar.style.backgroundColor = "red";
    botonEliminar.style.color = "white";
    botonEliminar.style.border = "none";
    botonEliminar.style.borderRadius = "5px";
    botonEliminar.style.cursor = "pointer";

    // Agregar evento al botón de eliminar
    botonEliminar.addEventListener("click", () => {
      delete pedido[producto]; // Eliminar el producto del pedido
      guardarPedido(); // Guardar los cambios en Local Storage
      actualizarPedido(); // Actualizar la lista después de eliminar
    });

    // Agregar el botón y texto al elemento de lista
    item.appendChild(botonEliminar);
    item.appendChild(document.createTextNode(`${producto} x${cantidad} - $${cantidad * precio}`));
    listaPedido.appendChild(item);
  });
  
  const espacio = document.createElement("br");
  listaPedido.appendChild(espacio);
  const totalElemento = document.createElement("li");
  totalElemento.textContent = `Total: $${total}`;
  totalElemento.style.fontWeight = "bold";
  listaPedido.appendChild(totalElemento);
}

// Función para agregar un producto al pedido
function agregarProductoAlPedido(producto, precio) {
  if (pedido[producto]) {
    pedido[producto].cantidad += 1;
  } else {
    pedido[producto] = { cantidad: 1, precio };
  }

  guardarPedido(); // Guardar en Local Storage
  actualizarPedido();
  console.log(`${producto} agregado al pedido. Cantidad: ${pedido[producto].cantidad}`);
}

// Inicializar la página cargando el pedido guardado
cargarPedido();


