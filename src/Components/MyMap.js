import React from "react";
import {
  Map,
  TileLayer,
  Circle,
  CircleMarker,
  Popup,
  Polyline,
  Polygon,
  Rectangle,
} from "react-leaflet";

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
  [51.49, -0.19],
];

const multiPolyline = [
  [
    [51.5, -0.15],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
];

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
  [51.5, -0.115],
];

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

function MyMap() {
  const position = [51.505, -0.09];
  return (
    <Map
      className="map"
      center={position}
      zoom={13}
      style={{ height: 700, width: "100%" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={position} radius={600} color={"red"} />
      <CircleMarker center={position} radius={150}>
        <Popup>This is our popup</Popup>
      </CircleMarker>
      <Polyline positions={polyline} />
      <Polyline positions={multiPolyline} color={"red"} />
      <Polygon positions={polygon} />
      <Rectangle bounds={rectangle} />
    </Map>
  );
}

export default MyMap;
