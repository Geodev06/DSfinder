import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import shop from '../assets/shop.png'
import user_loc from '../assets/user_loc.png'


const createRoutingMachineLayer = ({ storeLocation, location }) => {


    const start = {
        lat: location.lat,
        lng: location.lng
    }

    const end = {
        lat: storeLocation.lat,
        lng: storeLocation.lng
    }

    var userIcon = new L.Icon({
        iconUrl: user_loc,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var storeIcon = new L.Icon({
        iconUrl: shop,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    const instance = L.Routing.control({
        waypoints: [
            L.latLng(location.lat, location.lng),
            L.latLng(storeLocation.lat, storeLocation.lng)
        ],
        createMarker: function (i, wp, n) {

            var markerIcon = null
            if (i == 0) {
                markerIcon = userIcon
                var marker = L.marker(start, {
                    icon: markerIcon,

                }).bindPopup('You are here').openPopup()

            }
            else if (i == n - 1) {
                markerIcon = storeIcon
                var marker = L.marker(end, {
                    icon: markerIcon
                }).bindPopup('Your destination').openPopup()

            }

            return marker

        },


        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false,

    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutingMachineLayer);

export default RoutingMachine;
