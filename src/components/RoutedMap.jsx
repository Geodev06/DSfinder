import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingMachine from "./RoutingMachine";

const RoutedMap = ({ storeLocation, location }) => {



    return (
        <MapContainer
            doubleClickZoom={false}
            id="mapId"
            zoom={14}
            center={[location.lat, location.lng]}
        >
            <TileLayer
                attribution='© <a href="https://www.mapbox.com/about/maps/">MapboxApi</a> © WBSAIS-LSPU-SPCC 2022</strong>'
                url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                id='mapbox/navigation-night-v1'
                accessToken='pk.eyJ1IjoiYWdlb2Fnbm90ZSIsImEiOiJjbGM3cGNvZW0wMzI0M29xcmUzZDRvdWUxIn0.UY9EqhMwnx2_73aovHOHCw' />


            <RoutingMachine storeLocation={storeLocation} location={location} />
        </MapContainer>
    );
};

export default RoutedMap;
