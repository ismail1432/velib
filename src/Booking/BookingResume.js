import React, {Component} from 'react'
import Button from "../Button";

class BookingResume extends React.Component {
    constructor(props) {
        super(props);
    }

    cancelBooking = () => {
        this.props.action()
    }

    render() {

        return <div className={"row"} style={{display: this.props.displayResume}}>
            <div className="card-panel">
                <p className="flow-text blue-text text-darken-2">Congratulations <span className={'red-text text-darken-2'}> {this.props.name}</span> ! <br/>Your bike is booked, You have 20
                    minutes to get it at Station: <span className={'red-text text-darken-2'}>{this.props.stationName}</span> </p>
                <p>
                    <Button action={this.cancelBooking} icon={'cancel'}/>
                </p>
            </div>
        </div>
    }
}

export default BookingResume
