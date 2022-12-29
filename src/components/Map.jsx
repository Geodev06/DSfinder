
import { useState, useEffect } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"
import axios from "axios"
import shop from '../assets/shop.png'
import user_loc from '../assets/user_loc.png'
const Map = () => {

    const [stores, setStores] = useState([])
    useEffect(() => {
        async function fetchData() {
            let response = await axios.get('https://www.wbsais.ml/api/getstores/28a3d8d3441a0fddc472c8547c079575')
            setStores(response.data.data)
        }
        fetchData()
    }, [])



    function LocationMarker() {

        const [position, setPosition] = useState(null)

        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })


        var userMarker = new L.Icon({
            iconUrl: user_loc,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        return position === null ? null : (
            <Marker position={position} icon={userMarker}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }




    var greenIcon = new L.Icon({
        iconUrl: shop,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    return (
        <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={13}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='© <a href="https://www.mapbox.com/about/maps/">MapboxApi</a> © WBSAIS-LSPU-SPCC 2022</strong>'
                url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                id='mapbox/navigation-night-v1'
                accessToken='pk.eyJ1IjoiYWdlb2Fnbm90ZSIsImEiOiJjbGM3cGNvZW0wMzI0M29xcmUzZDRvdWUxIn0.UY9EqhMwnx2_73aovHOHCw'
            />
            <LocationMarker />
            {
                stores.length ? stores.map((store, index) =>
                    <Marker key={index} position={[store.lat, store.long]} icon={greenIcon}>
                        <Popup>
                            <span>{store.store_name} <br /> {store.address}</span>
                        </Popup>
                    </Marker>) : ''
            }
        </MapContainer>
    )
}
export default Map