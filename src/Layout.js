import React from 'react';
import Diaporama from './Diaporama';
import MapContainer from './Maps/MapContainer';

class Layout extends React.Component {
    render() {
        return <div>
        <Diaporama />
        <MapContainer />
        </div>
    }
}

export default Layout
