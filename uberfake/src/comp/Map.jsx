import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef } from 'react';
import { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import { RxHeight } from 'react-icons/rx';
// import NEXT_PUBLIC_MAPBOX_TOKEN from "../env"
export default function Map(){
const Token= `pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ`
mapboxgl.accessToken =  Token
console.log(Token)
const mapContainer = useRef(null);
useEffect(()=>{ // here we are useing useffect to create the mapbox when it renders
 

  const map = new mapboxgl.Map({
   
    container:'map',
    style: "mapbox://styles/joser1171/clenayd4s002x01l0kvmf5t6g",
    center: [-122.404, 37.75],
    zoom: 2,

  })
})
  return(
    <div>
<div id='map' className="map-container" />  
    <h1>Map</h1>
    </div>
  )
}