import React, { useState } from "react";
import { Map, TileLayer, VideoOverlay } from "react-leaflet";

function MyMap() {
  const position = [25, -100];
  const [play, setPlay] = useState(true);

  function onTogglePlay() {
    setPlay(!play);
  }

  return (
    <Map
      className="map"
      center={position}
      zoom={4}
      style={{ height: 800, width: "100%" }}
      onClick={onTogglePlay}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <VideoOverlay
        bounds={[
          [32, -130],
          [13, -100],
        ]}
        play={play}
        url="https://www.mapbox.com/bites/00188/patricia_nasa.webm"
      />
    </Map>
  );
}

export default MyMap;
