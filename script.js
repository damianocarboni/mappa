let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([43.775880873386264, 11.145766889414977]).addTo(map);
marker.bindPopup("<b>Attenzione!</b><br>Qui ci abita un gay.").openPopup();