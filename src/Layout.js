import React from 'react';
import Diaporama from './Diaporama';
import MapContainer from './Maps/MapContainer';

class Layout extends React.Component {
    render() {
        return <div>
            <div className={"row"}>
        <Diaporama />
            </div>
            <div className={"row"}>
        <MapContainer />
            </div>
        </div>
    }
}

export default Layout
