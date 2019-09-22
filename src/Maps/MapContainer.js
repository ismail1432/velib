import React, {Component} from 'react'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

class MapContainer extends React.Component {
    state = {
        lat: 48.8589506,
        lng: 2.2768488,
        zoom: 10,
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

export default MapContainer
