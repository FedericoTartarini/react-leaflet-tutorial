import React from "react";
import { Map, TileLayer } from "react-leaflet";
import ReactLeafletKml from "react-leaflet-kml";

const kmlText = "";
const parser = new DOMParser();
const kml = parser.parseFromString(kmlText, "text/xml");

function MyMap() {
  const position = [1.35, 103.8];

  const [kml, setKml] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/aviklai/react-leaflet-kml/master/src/assets/example1.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
      });
  }, []);

  return (
    <Map
      className="map"
      center={position}
      zoom={10}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ReactLeafletKml kml={kml} />
    </Map>
  );
}

export default MyMap;
