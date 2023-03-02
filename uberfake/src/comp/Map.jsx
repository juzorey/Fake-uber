
import { useContext } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import axios from 'axios';
import { RxHeight } from 'react-icons/rx';
import { useRef } from 'react';


export default function Map(){

  const[location,setLocation] = useState({
    center:''
  })

  
const Token= `pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ`

// https://api.mapbox.com/directions/v5/mapbox/driving/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ 

const changeLocation = () => {

  setLocation({...location, center:'jose'})
  console.log(location,'new2')

}

changeLocation()
useEffect(()=>{


  setLocation({...location, center:'jose'})
  console.log(location,'new')

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/joser1171/clenayd4s002x01l0kvmf5t6g',
  center: location.center, //-118.242766, 34.053691 //-122.662323, 45.523751 // starting position
  zoom: 10
});
// set the bounds of the map
const bounds = [
  [-118.521447, 33.899991],
  [ -118.126728, 34.161439]   // -118.521447, 33.899991, -118.126728, 34.161439 // [-123.069003, 45.395273],[-122.303707, 45.612333]
];
map.setMaxBounds(bounds);

// an arbitrary start will always be the same
// only the end or destination will change
const start = [-122.662323, 45.523751];

// this is where the code for the next step will go

// create a function to make a directions request
async function getRoute(end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
  // add turn instructions here at the end
}

map.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add starting point to the map
  map.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });
  // this is where the code from the next step will go
});

map.on('click', (event) => {
  const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };
  if (map.getLayer('end')) {
    map.getSource('end').setData(end);
  } else {
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }
  getRoute(coords);
});


})




// mapboxgl.accessToken =  Token
// console.log(Token)
// const mapContainer = useRef(null);
// useEffect(()=>{ // here we are useing useffect to create the mapbox when it renders


//   const map = new mapboxgl.Map({
  
//     container:'map',
//     style: "mapbox://styles/joser1171/clenayd4s002x01l0kvmf5t6g",
//     center: [-122.662323, 45.523751],
//     zoom: 12,

//   })


//   const getDirections = async () => {
//     const res = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${Token}`)
//     console.log(res.data) // can set state with this

//   const json = await res.json();
//   const data = json.routes[0];
//   const route = data.geometry.coordinates;
//   const geojson = {
//     type: 'Feature',
//     properties: {},
//     geometry: {
//       type: 'LineString',
//       coordinates: route
//     }
//   };
//   // if the route already exists on the map, we'll reset it using setData
//     if (map.getSource('route')) {
//       map.getSource('route').setData(geojson);
//     }
//     // otherwise, we'll make a new request
//     else {
//       map.addLayer({
//         id: 'route',
//         type: 'line',
//         source: {
//           type: 'geojson',
//           data: geojson
//         },
//         layout: {
//           'line-join': 'round',
//           'line-cap': 'round'
//         },
//         paint: {
//           'line-color': '#3887be',
//           'line-width': 5,
//           'line-opacity': 0.75
//         }
//       });
//     }
//     // add turn instructions here at the end
//   }

//   map.on('load', () => {
//     // make an initial directions request that
//     // starts and ends at the same location
//     // getDirections(start);

//     // Add starting point to the map
//     map.addLayer({
//       id: 'point',
//       type: 'circle',
//       source: {
//         type: 'geojson',
//         data: {
//           type: 'FeatureCollection',
//           features: [
//             {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'Point',
//                 coordinates: start
//               }
//             }
//           ]
//         }
//       },
//       paint: {
//         'circle-radius': 10,
//         'circle-color': '#3887be'
//       }
//     });

//   })

//   map.on('click', (event) => {
//     const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
//     const end = {
//       type: 'FeatureCollection',
//       features: [
//         {
//           type: 'Feature',
//           properties: {},
//           geometry: {
//             type: 'Point',
//             coordinates: coords
//           }
//         }
//       ]
//     };
//     if (map.getLayer('end')) {
//       map.getSource('end').setData(end);
//     } else {
//       map.addLayer({
//         id: 'end',
//         type: 'circle',
//         source: {
//           type: 'geojson',
//           data: {
//             type: 'FeatureCollection',
//             features: [
//               {
//                 type: 'Feature',
//                 properties: {},
//                 geometry: {
//                   type: 'Point',
//                   coordinates: coords
//                 }
//               }
//             ]
//           }
//         },
//         paint: {
//           'circle-radius': 10,
//           'circle-color': '#f30'
//         }
//       });
//     }
//     getDirections([-122.677738,45.522458]);
//   });

//  })


// // useEffect(()=> {
//   const getDirections = async (end) => {
//     const res = await axios.get(`https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${Token}`)
//     console.log(res.data) // can set state with this

//   const json = await res.json();
//   const data = json.routes[0];
//   const route = data.geometry.coordinates;
//   const geojson = {
//     type: 'Feature',
//     properties: {},
//     geometry: {
//       type: 'LineString',
//       coordinates: route
//     }
//   };
//   // if the route already exists on the map, we'll reset it using setData
//     if (map.getSource('route')) {
//       map.getSource('route').setData(geojson);
//     }
//     // otherwise, we'll make a new request
//     else {
//       map.addLayer({
//         id: 'route',
//         type: 'line',
//         source: {
//           type: 'geojson',
//           data: geojson
//         },
//         layout: {
//           'line-join': 'round',
//           'line-cap': 'round'
//         },
//         paint: {
//           'line-color': '#3887be',
//           'line-width': 5,
//           'line-opacity': 0.75
//         }
//       });
//     }
//     // add turn instructions here at the end
//   }

//   map.on('load', () => {
//     // make an initial directions request that
//     // starts and ends at the same location
//     getDirections(start);

//     // Add starting point to the map
//     map.addLayer({
//       id: 'point',
//       type: 'circle',
//       source: {
//         type: 'geojson',
//         data: {
//           type: 'FeatureCollection',
//           features: [
//             {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'Point',
//                 coordinates: start
//               }
//             }
//           ]
//         }
//       },
//       paint: {
//         'circle-radius': 10,
//         'circle-color': '#3887be'
//       }
//     });

//   })
//   getDirections([-122.677738,45.522458])
// },[]) 







    return(
      <div>
  <div id='map' className="map-container" />  
      <h1>Map</h1>
      </div>
    )
}
