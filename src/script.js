var url = 'https://datosabiertos.malaga.eu/api/3/action/datastore_search?resource_id=9bc05288-1c11-4eec-8792-d74b679c8fcf';
var jsonFeatures = [];
var i = 0;
var map = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Ejemplo de <a href="https://github.com/AlejandroFuster">Alejandro Fuster</a>'
}).addTo(map);
map.setView([36.721261, -4.4212655]);
map.setZoom(14)

$.ajax({
    url: url,
    method: 'GET',
    async: false
}).done(function(result) {
    // Array de datos de JSON
    var data = result.result.records;
    // Iteramos
    data.forEach(function(point) {
        var feature = {
            type: 'Feature',
            properties: point,
            geometry: {
                type: 'Point',
                coordinates: [point.lon, point.lat]
            }
        };
        jsonFeatures.push(feature);
    });
}).fail(function(error) {
    console.error(error);
});

var geoJson = {
    type: 'FeatureCollection',
    features: jsonFeatures
};


var coordinates = L.geoJson(geoJson, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup('<h1>' + feature.properties._id + '</h1>' +
            '<p>C&oacute;digo de l&iacute;nea: ' + feature.properties.codLinea + '<br>' +
            'C&oacute;digo de bus: ' + feature.properties.codBus + '<br>' +
            'C&oacute;digo de parada inicial: ' + feature.properties.codParIni + '<br>' +
            'Sentido: ' + feature.properties.sentido + '<br>' +
            '&Uacute;ltima actualizaci&oacute;n: ' + feature.properties.last_update + '</p>');
    }
}).addTo(map);