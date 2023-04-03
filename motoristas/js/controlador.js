// Obtener elementos del DOM
const pedidosATomar = document.querySelector("#pedidos-a-tomar tbody");
const pedidosTomados = document.querySelector("#pedidos-tomados tbody");
// const mapa = document.getElementById("map");

var mapa = L.map("mapa").setView([51.505, -0.09], 13);

// Simular datos de pedidos
const pedidos = [
  { numero: "001", cliente: "Juan Perez", ubicacion: "Blv. Los Proceres" },
  { numero: "002", cliente: "María González", ubicacion: "Col. Universidad Norte" },
  { numero: "003", cliente: "David Hernandez", ubicacion: "Col. Florencia Norte" }
];

// Agregar filas de pedidos a tomar
pedidos.forEach(pedido => {
  const fila = `
    <tr>
      <td>${pedido.numero}</td>
      <td>${pedido.cliente}</td>
      <td>${pedido.ubicacion}</td>
      <td><button class="tomar" data-numero="${pedido.numero}">Tomar pedido</button></td>
    </tr>
  `;
  pedidosATomar.insertAdjacentHTML("beforeend", fila);
});

// Manejar eventos de botones de tomar pedido
const botonesTomar = document.querySelectorAll(".tomar");
botonesTomar.forEach(boton => {
  boton.addEventListener("click", e => {
    const fila = e.target.closest("tr");
    const pedido = {
      numero: fila.querySelector("td:nth-child(1)").textContent,
      cliente: fila.querySelector("td:nth-child(2)").textContent,
      ubicacion: fila.querySelector("td:nth-child(3)").textContent
    };
    fila.remove();
    const filaTomado = `
      <tr>
        <td>${pedido.numero}</td>
        <td>${pedido.cliente}</td>
        <td>${pedido.ubicacion}</td>
        <td><button class="entregar" data-numero="${pedido.numero}">Entregar pedido</button></td>
      </tr>
    `;
    pedidosTomados.insertAdjacentHTML("beforeend", filaTomado);
  });
});

// Manejar eventos de botones de entregar pedido
const botonesEntregar = document.querySelectorAll(".entregar");
botonesEntregar.forEach(boton => {
  boton.addEventListener("click", e => {
    const fila = e.target.closest("tr");
    fila.remove();
  });
});

// Inicializar mapa
// function initMap() {
//   const myLatLng = { lat: 19.4326, lng: -99.1332 };
//   const map = new google.maps.Map(mapa, {
//     zoom: 12,
//     center: myLatLng
//   });
//   const marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: "Estás aquí"
//   });
// }


L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(mapa);