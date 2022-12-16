import styled from 'styled-components';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png';
import iconLocation from '../assets/images/icon-location.svg';

type MapProps = {
  lat: number;
  lng: number;
  center?: [number, number];
};

// useMap
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.flyTo(center);
  return null;
}

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  //useMap function

  return (
    <NewMap>
      <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
        <ChangeView center={[lat, lng]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </NewMap>
  );
};

const NewMap = styled.div`
  @import url('~leaflet/dist/leaflet.css');

  .leaflet-container {
    width: 425px;
    height: 79vh;
    z-index: -1;
  }

  @media screen and (min-width: 800px) {
    .leaflet-container {
      width: 100%;
      height: 70vh;
    }
  }
`;

const svgIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<img src=${iconLocation} alt='icon' />`,
  iconSize: [46, 46],
});

L.Marker.prototype.options.icon = svgIcon;

export default Map;
