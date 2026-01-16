const basePath = "assets";
const juegos = {
  videojuegos: [
    {
      nombre: "Minecraft",
      clasificacion: "E10+",
      precio: 442,
      fecha: "18/11/2011",
      imagen: `${basePath}/minecraft.jpg`,
    },
    {
      nombre: "Grand Theft Auto V",
      clasificacion: "M",
      precio: 1020,
      fecha: "17/09/2013",
      imagen: `${basePath}/gtav.jpeg`,
    },
    {
      nombre: "The Legend of Zelda: Breath of the Wild",
      clasificacion: "E10+",
      precio: 1190,
      fecha: "03/03/2017",
      imagen: `${basePath}/tloz_botw.jpg`,
    },
    {
      nombre: "Mario Kart 8 Deluxe",
      clasificacion: "E",
      precio: 1020,
      fecha: "28/04/2017",
      imagen: `${basePath}/mariokart.jpg`,
    },
    {
      nombre: "Super Mario Bros. Wonder",
      clasificacion: "E",
      precio: 1020,
      fecha: "20/10/2023",
      imagen: `${basePath}/supermario_wonder.jpg`,
    },
    {
      nombre: "Dark Souls Trilogy",
      clasificacion: "M",
      precio: 850,
      fecha: "19/10/2018",
      imagen: `${basePath}/darksouls.jpeg`,
    },
    {
      nombre: "Avatar: Frontiers of Pandora",
      clasificacion: "T",
      precio: 1190,
      fecha: "07/12/2023",
      imagen: `${basePath}/avatar.jpg`,
    },
    {
      nombre: "No More Heroes 3",
      clasificacion: "T",
      precio: 1020,
      fecha: "27/08/2021",
      imagen: `${basePath}/no_more_heroes.jpeg`,
    },
    {
      nombre: "Stellar Blade",
      clasificacion: "T",
      precio: 1190,
      fecha: "26/04/2024",
      imagen: `${basePath}/stellar_blade.jpg`,
    },
    {
      nombre: "Persona 5 Royal",
      clasificacion: "T",
      precio: 1020,
      fecha: "31/10/2019",
      imagen: `${basePath}/persona5.jpg`,
    },
  ],
};

const contenedorCartas = document.getElementById("juegos");

juegos.videojuegos.forEach((juego) => {
  const carta = document.createElement("div");
  carta.classList.add("card");

  carta.innerHTML = `
  <img class="card-image" src="${juego.imagen}" width="128" height="180">
  <div class="card-items">
    <h3>${juego.nombre}</h3>
    <p>Clasificación: ${juego.clasificacion}</p>
    <p>Lanzamiento: ${juego.fecha}</p>
    <p class="precio">Precio: $${juego.precio}</p>
  </div>
  `;

  contenedorCartas.appendChild(carta);
});
