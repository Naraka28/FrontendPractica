const juegos = {
  videojuegos: [
    { nombre: "Minecraft", clasificacion: "E10+", precio: 26 },
    { nombre: "Grand Theft Auto V", clasificacion: "M", precio: 60 },
    {
      nombre: "The Legend of Zelda: Breath of the Wild",
      clasificacion: "E10+",
      precio: 70,
    },
    { nombre: "Mario Kart 8 Deluxe", clasificacion: "E", precio: 60 },
    { nombre: "Super Mario Bros. Wonder", clasificacion: "E", precio: 60 },
    { nombre: "Dark Souls Trilogy", clasificacion: "M", precio: 50 },
    { nombre: "Avatar: Frontiers of Pandora", clasificacion: "T", precio: 70 },
    { nombre: "No More Heroes 3", clasificacion: "T", precio: 60 },
    { nombre: "Stellar Blade", clasificacion: "T", precio: 70 },
    { nombre: "Persona 5 Royal", clasificacion: "T", precio: 60 },
  ],
};

const contenedorCartas = document.getElementById("juegos");

juegos.videojuegos.forEach((juego) => {
  const carta = document.createElement("div");
  carta.classList.add("card");

  carta.innerHTML = `
    <h3>${juego.nombre}</h3>
    <p>Clasificación: ${juego.clasificacion}</p>
    <p class="precio">Precio: $${juego.precio}</p>
  `;

  contenedorCartas.appendChild(carta);
});
