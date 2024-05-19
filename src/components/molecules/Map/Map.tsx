import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

interface Marker {
  geocode: [number, number];
  popUp: string;
}

function Map() {
  const markers: Array<Marker> = [{ geocode: [47.222435, 38.919043], popUp: 'Это мы!' }];

  const icon = new Icon({
    iconUrl: 'src/assets/a-s-3/location-pin.png',
    iconSize: [46, 46],
  });

  return (
    <MapContainer center={[47.222435, 38.919043]} zoom={14.5} scrollWheelZoom={false}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {/* <TileLayer url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png' /> */}
      {markers.map((marker: Marker) => (
        <Marker key={marker.popUp} position={marker.geocode} icon={icon} />
      ))}
    </MapContainer>
  );
}

export default Map;
