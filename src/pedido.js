// Pedido almacenado como un objeto
const pedido = {};

// Elementos del DOM
const listaPedido = document.getElementsByClassName("aquiVaElPedido");

// Función para actualizar la lista de pedidos
function actualizarPedido() {
  listaPedido.innerHTML = ""; // Limpiar la lista actual
  let total = 0;

  Object.keys(pedido).forEach((producto) => {
    const { cantidad, precio } = pedido[producto];
    total += cantidad * precio;

    const item = document.createElement("li");
    item.textContent = `${producto} x${cantidad} - $${cantidad * precio}`;
    listaPedido.appendChild(item);
  });

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

  actualizarPedido();
  console.log(`${producto} agregado al pedido. Cantidad: ${pedido[producto].cantidad}`);
}
