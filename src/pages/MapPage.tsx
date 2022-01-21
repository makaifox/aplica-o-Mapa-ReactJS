import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./MapPage.css";
import useGeolocation from 'react-hook-geolocation'

export interface MapPageProps { }

const MapPage = () => {

  // carrega chave de API 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBP26qoYSjI0bT1TUB_b7nXLaI2br-gMRw"
  });

  //localiza o usuário
  const geolocation = useGeolocation()
  const localization = {
    lat: geolocation.latitude,
    lng: geolocation.longitude
  };

  return <div className='map'>
    {isLoaded ? (
      // tag da api do google maps
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={localization}
        zoom={19}
      >
        <Marker position={localization} />
      </GoogleMap>
    ) : <></>

    }
  </div>
};
export default MapPage;
