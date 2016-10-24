$.getJSON('county.geojson', function(data){
var layer = L.geoJson(data, {
style: {color: 'red', opacity: 0.5, weight: 5}
});
layer.addTo(map);
});
