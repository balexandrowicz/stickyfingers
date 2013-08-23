var attribution = "Map data by <a href='http://www.openstreetmap.org' target='_blank'>OSM</a>/<a href='mailto:tyladee@gmail.com'>Tyler Dahlberg</a> - Tiles by <a href='http://www.mapbox.com' target=''>MapBox</a> "
var mapboxDark = L.tileLayer('http://a.tiles.mapbox.com/v3/alxndrwcz.map-dkoz52qr/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: attribution,
});

var map = L.map('map').addLayer(mapboxDark);

var markers = L.markerClusterGroup({
    showCoverageOnHover: true,
    spiderfyOnMaxZoom: true  
});

var geoJsonLayer = L.geoJson(thefts, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.bike_value);
    }
});

markers.addLayer(geoJsonLayer);
map.addLayer(markers);
map.fitBounds(markers.getBounds());