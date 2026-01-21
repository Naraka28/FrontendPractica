const basePath = "assets";
const juegos = {
  videojuegos: [
    {
      nombre: "Minecraft",
      clasificacion: "E10+",
      precio: 442,
      fecha: "18/11/2011",
      desarrollador: "Mojang Studios",
      plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile"],
      puntuacion: 5,
      stock: 15,
      descripcion:
        "Juego de construcción y supervivencia en un mundo abierto generado proceduralmente, donde la creatividad del jugador es el límite.",
      imagen: `${basePath}/minecraft.jpg`,
    },
    {
      nombre: "Grand Theft Auto V",
      clasificacion: "M",
      precio: 1020,
      fecha: "17/09/2013",
      desarrollador: "Rockstar Games",
      plataformas: ["PC", "PlayStation", "Xbox"],
      puntuacion: 5,
      stock: 8,
      descripcion:
        "Juego de acción en mundo abierto que sigue la historia de tres criminales en la ciudad ficticia de Los Santos.",
      imagen: `${basePath}/gtav.jpeg`,
    },
    {
      nombre: "The Legend of Zelda: Breath of the Wild",
      clasificacion: "E10+",
      precio: 1190,
      fecha: "03/03/2017",
      desarrollador: "Nintendo EPD",
      plataformas: ["Nintendo Switch", "Wii U"],
      puntuacion: 5,
      stock: 5,
      descripcion:
        "Aventura épica en mundo abierto donde exploras Hyrule con total libertad, resolviendo acertijos y enfrentando enemigos.",
      imagen: `${basePath}/tloz_botw.jpg`,
    },
    {
      nombre: "Mario Kart 8 Deluxe",
      clasificacion: "E",
      precio: 1020,
      fecha: "28/04/2017",
      desarrollador: "Nintendo EPD",
      plataformas: ["Nintendo Switch"],
      puntuacion: 4.5,
      stock: 12,
      descripcion:
        "Juego de carreras arcade con personajes del universo Mario, ideal para competir en multijugador local u online.",
      imagen: `${basePath}/mariokart.jpg`,
    },
    {
      nombre: "Super Mario Bros. Wonder",
      clasificacion: "E",
      precio: 1020,
      fecha: "20/10/2023",
      desarrollador: "Nintendo EPD",
      plataformas: ["Nintendo Switch"],
      puntuacion: 4.5,
      stock: 9,
      descripcion:
        "Plataformero clásico reinventado con nuevas mecánicas, niveles creativos y el poder de las Flores Maravilla.",
      imagen: `${basePath}/supermario_wonder.jpg`,
    },
    {
      nombre: "Dark Souls Trilogy",
      clasificacion: "M",
      precio: 850,
      fecha: "19/10/2018",
      desarrollador: "FromSoftware",
      plataformas: ["PC", "PlayStation", "Xbox"],
      puntuacion: 4.5,
      stock: 0,
      descripcion:
        "Colección de juegos de rol y acción conocidos por su alta dificultad, ambientación oscura y combate estratégico.",
      imagen: `${basePath}/darksouls.jpeg`,
    },
    {
      nombre: "Avatar: Frontiers of Pandora",
      clasificacion: "T",
      precio: 1190,
      fecha: "07/12/2023",
      desarrollador: "Massive Entertainment",
      plataformas: ["PC", "PlayStation 5", "Xbox Series X|S"],
      puntuacion: 4,
      stock: 6,
      descripcion:
        "Aventura de acción en primera persona ambientada en el mundo de Pandora, con exploración y combate dinámico.",
      imagen: `${basePath}/avatar.jpg`,
    },
    {
      nombre: "No More Heroes 3",
      clasificacion: "T",
      precio: 1020,
      fecha: "27/08/2021",
      desarrollador: "Grasshopper Manufacture",
      plataformas: ["Nintendo Switch", "PC", "PlayStation", "Xbox"],
      puntuacion: 4.5,
      stock: 4,
      descripcion:
        "Juego de acción estilizado con combates intensos y una narrativa excéntrica protagonizada por Travis Touchdown.",
      imagen: `${basePath}/no_more_heroes.jpeg`,
    },
    {
      nombre: "Stellar Blade",
      clasificacion: "T",
      precio: 1190,
      fecha: "26/04/2024",
      desarrollador: "Shift Up",
      plataformas: ["PlayStation 5"],
      puntuacion: 4.5,
      stock: 7,
      descripcion:
        "Juego de acción y aventura con combates rápidos y una narrativa de ciencia ficción en un mundo postapocalíptico.",
      imagen: `${basePath}/stellar_blade.jpg`,
    },
    {
      nombre: "Persona 5 Royal",
      clasificacion: "T",
      precio: 1020,
      fecha: "31/10/2019",
      desarrollador: "Atlus",
      plataformas: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
      puntuacion: 5,
      stock: 10,
      descripcion:
        "JRPG que combina vida estudiantil con exploración de mazmorras y una historia profunda sobre la rebeldía juvenil.",
      imagen: `${basePath}/persona5.jpg`,
    },
  ],
};

const contenedorCartas = document.getElementById("juegos");
init();
function init() {
  recalcularStock();
  renderizarJuegos();
}

function renderizarJuegos() {
  contenedorCartas.innerHTML = "";

  juegos.videojuegos.forEach((juego) => {
    const carta = document.createElement("div");
    carta.classList.add("card");
    carta.dataset.nombre = juego.nombre;

    const btn = document.createElement("button");
    btn.className = "btn-cart";
    btn.textContent = "Agregar al carrito";

    btn.addEventListener("click", () => {
      agregarACarrito(juego);
    });

    carta.innerHTML = `
      <img class="card-image" src="${juego.imagen}">
      <article class="card-items">
        <h3>${juego.nombre}</h3>
        <p>Clasificación: ${juego.clasificacion}</p>
        <p>Lanzamiento: ${juego.fecha}</p>
        <p class="precio">Precio: $${juego.precio}</p>
        <p class="stock">
          ${
            juego.stockDisponible > 0
              ? `Disponible: ${juego.stockDisponible}`
              : "Agotado"
          }
        </p>
      </article>
    `;

    if (juego.stockDisponible === 0) {
      btn.disabled = true;
      btn.classList.add("btn-disabled");
      btn.textContent = "Agotado";
    }

    carta.querySelector(".card-items").appendChild(btn);
    contenedorCartas.appendChild(carta);
  });
}

function detallesCartca(juego) {}

function agregarACarrito(juego) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const item = carrito.find((i) => i.nombre === juego.nombre);

  if (item) {
    item.cantidad++;
  } else {
    carrito.push({
      nombre: juego.nombre,
      precio: juego.precio,
      imagen: juego.imagen,
      cantidad: 1,
      stock: juego.stock,
    });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));

  recalcularStock();
  actualizarUI();
  mostrarNotificacion(`${juego.nombre} agregado al carrito`);
}

function actualizarUI() {
  contenedorCartas.innerHTML = "";
  renderizarJuegos();
}

function mostrarNotificacion(texto) {
  const toast = document.getElementById("toast");
  toast.textContent = texto;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
function recalcularStock() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  juegos.videojuegos.forEach((juego) => {
    const item = carrito.find((i) => i.nombre === juego.nombre);
    const cantidad = item ? item.cantidad : 0;

    juego.stockDisponible = Math.max(juego.stock - cantidad, 0);
  });
}

function ordenarAscendente(juegos) {}
function ordenarDescendente(juegos) {}
