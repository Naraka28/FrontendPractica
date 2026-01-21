const contenedorCartas = document.getElementById("cart-items");
const totalSpan = document.getElementById("total");

init();

function init() {
  renderizarCarrito();
}

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function renderizarCarrito() {
  const carrito = obtenerCarrito();
  contenedorCartas.innerHTML = "";

  if (carrito.length === 0) {
    contenedorCartas.innerHTML = "<p>El carrito está vacío</p>";
    totalSpan.textContent = "0";
    return;
  }

  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.imagen}" width="80">
      <div class="cart-info">
        <h4>${item.nombre}</h4>
        <p>$${item.precio} MXN</p>
        <div class="cart-actions">
          <button onclick="cambiarCantidad('${item.nombre}', -1)">-</button>
          <span>${item.cantidad}</span>
          <button onclick="cambiarCantidad('${item.nombre}', 1)">+</button>
          <button class="btn-remove" onclick="eliminarItem('${item.nombre}')">
            Eliminar
          </button>
        </div>
      </div>
    `;
    contenedorCartas.appendChild(div);
  });

  calcularTotal();
}

function cambiarCantidad(nombre, cambio) {
  const carrito = obtenerCarrito();
  const item = carrito.find((i) => i.nombre === nombre);

  if (!item) return;

  if (cambio > 0 && item.cantidad >= item.stock) {
    alert(`No hay más stock disponible de ${nombre}`);
    return;
  }

  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    eliminarItem(nombre);
    return;
  }

  guardarCarrito(carrito);
  renderizarCarrito();
}

function eliminarItem(nombre) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter((i) => i.nombre !== nombre);
  guardarCarrito(carrito);
  renderizarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  renderizarCarrito();
}

function calcularTotal() {
  const carrito = obtenerCarrito();
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );
  totalSpan.textContent = total.toLocaleString("es-MX");
}
