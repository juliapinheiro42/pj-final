import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { setPolices} from '../../redux/modules/police';

export const MapContainer = (props) => {

  const [map, setMap] = useState(null);
  const { google} = props;

  
    


 function searchNearby(map, center){
  const service = new google.maps.places.PlacesService(map);

  const request = {
    location: center,
    radius: '20000',
    type: ['polícia federal'],
  };

  service.nearbySearch(request, (results, status) => {
  if (status === google.maps.places.PlacesServiceStatus.OK){
  console.log('polícia federal>>>', results)
  }
  })
 }
   
     function onMapReady(_, map){
     setMap(map);
     searchNearby(map, map.center)
     }; 
  return (
    <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}
    zoom={15}>
      
    </Map>
  );

};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer)
    