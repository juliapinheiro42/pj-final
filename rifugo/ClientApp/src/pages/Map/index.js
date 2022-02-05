import "leaflet/dist/leaflet.css";
 
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";
 
 import { fetchLocalMapBox } from "../../apiMapBox";
 import AsyncSelect from "react-select/async";
 
 
 import "./map.css";
 
 export default function Map(){
   return(
     <div></div>
   )
 }