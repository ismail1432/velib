import React, {Component} from 'react'
import {Map, TileLayer, Marker, Tooltip} from 'react-leaflet'
import Axios from 'axios';

const API_ENDPOINT = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=200&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state';

class MapContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stations: [],
            zoom: 14,
            basePosition: [
                48.8490816,
                2.3506324
            ]
        };
    }

    toggleBookingFormDisplayed = (stationName) => {
        this.props.toggleBookingFormDisplayed(stationName)
    }

    componentDidMount() {
        Axios.get(API_ENDPOINT)
            .then(response => {
                const stations = response.data.records;
                this.setState({stations});
            })
    }

    render() {
        const marker = this.state.stations.map(station =>
            <Marker onClick={() => this.toggleBookingFormDisplayed(station.fields.name)}
                key={station.recordid}
                    position={[station.geometry.coordinates[1], station.geometry.coordinates[0]]}>
                <Tooltip>
                    {station.fields.name}
                </Tooltip>
            </Marker>
        );
        return (
            <div>
                <Map center={this.state.basePosition} zoom={10}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {marker}
                </Map>
            </div>
        )
    }
}

export default MapContainer
