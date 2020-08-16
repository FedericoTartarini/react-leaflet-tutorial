import React, {Component} from "react";
import {Map, TileLayer} from "react-leaflet";

function MyMap() {
    const position = [1.35, 103.8]
    return (
        <Map className="map"
             center={position}
             zoom={10}
             style={{height: 500, width: "100%"}}
        >
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>
    )

}

export default MyMap;