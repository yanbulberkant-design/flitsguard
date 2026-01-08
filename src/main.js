// src/main.js

const map = L.map('map').setView([52.3702, 4.8952], 10); // Midden Nederland

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Jouw locatie
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(position => {
    const { latitude, longitude } = position.coords;
    map.setView([latitude, longitude], 13);
    L.marker([latitude, longitude]).addTo(map).bindPopup('Jij bent hier').openPopup();
  });
}

// Voorbeeld flitspalen (later echte data)
const flitsers = [
  [52.0907, 5.1214], // Utrecht
  [52.3702, 4.8952], // Amsterdam
  [51.9244, 4.4777], // Rotterdam
];

flitsers.forEach(pos => {
  L.marker(pos).addTo(map).bindPopup('Flitspaal!');
});
