// javascript for getting vector tiles into the map
// i just brought this code in from the /Users/kyleweingart/Documents/working/openlayers-workshop-en/examples/kyle_vectortile
// tile server is in /Users/kyleweingart/Documents/HVX/mbtiles-server
// error message saying the import is not recognized - do i need to reference ol in the head of the html?  use require? what do i need to do in order to use the packages? 

console.log("working");

// import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import MVT from 'ol/format/MVT';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';

const map = new Map({
  target: 'map-container',
  view: new  View({
    center: [-8626073.87, 4516494.76],
    zoom: 8
  })
});

const layer = new VectorTileLayer({
  source: new VectorTileSource({
    attributions: [
      '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a>',
      '<a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
    ],
    format: new MVT(),
    // url: `https://free-{1-3}.tilehosting.com/data/v3/{z}/{x}/{y}.pbf.pict?key=${key}`,
    url: 'http://localhost:3000/2017-07-03_us_virginia/{z}/{x}/{y}.pbf',
    maxZoom: 14
  })
});
map.addLayer(layer);



