import React, { Component } from "react";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

function GetIcon(_iconSize, forecast) {
  return L.icon({
    iconUrl: require("../Static/Icons/" + forecast + ".png"),
    iconSize: [_iconSize],
  });
}

function MyMap() {
  const position = [1.35, 103.8];

  const locations = [
    { name: "west", position: [1.35735, 103.7], size: 40, forecast: "cloudy" },
    { name: "east", position: [1.35735, 103.94], size: 30, forecast: "cloudy" },
    { name: "north", position: [1.4, 103.8], size: 50, forecast: "heavy-rain" },
  ];

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
      {locations.map((location) => (
        <Marker
          position={location.position}
          icon={GetIcon(location.size, location.forecast)}
        >
          <Popup>
            {location.name} - {location.forecast}
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}

export default MyMap;
