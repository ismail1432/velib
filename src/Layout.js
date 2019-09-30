import React from 'react';
import Diaporama from './Diaporama';
import MapContainer from './Maps/MapContainer';
import BookingForm from './Booking/BookingForm';
import BookingResume from './Booking/BookingResume';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBookingDisplayed: false,
            mapColSize: 12,
            stationName: '',
            displayResume: 'none',
            displayBookingForm: 'block',
            name: ''
        };

        this.toggleBookingFormDisplayed = this.toggleBookingFormDisplayed.bind(this)
        this.toggleDisplayBookingResume = this.toggleDisplayBookingResume.bind(this)
        this.cancelBooking = this.cancelBooking.bind(this)
    }

    toggleBookingFormDisplayed(stationName) {
        if (!this.state.isBookingDisplayed) {
            this.setState({
                isBookingDisplayed: !this.state.isBookingDisplayed,
                mapColSize: 8,
                displayBookingForm: 'block'
            })
        }

        this.setState({stationName})
    }

    toggleDisplayBookingResume(event) {
        this.setState({
            displayResume: 'block',
            name: event.target.name.value
        })
    }

    cancelBooking() {
        this.setState({
            displayResume: 'none',
            displayBookingForm: 'none',
            mapColSize: 12,
            isBookingDisplayed: false
        })
    }

    render() {
        const isBookingDisplayed = this.state.isBookingDisplayed;
        let bookingForm;
        let bookingResume;

        if (isBookingDisplayed) {
            bookingForm = <div className={"col m4"}>
                <BookingForm displayBookingForm={this.state.displayBookingForm} stationName={this.state.stationName} toggleDisplayBookingResume={this.toggleDisplayBookingResume}/>
            </div>
        }

        bookingResume = <BookingResume
            name={this.state.name}
            stationName={this.state.stationName}
            displayResume={this.state.displayResume}
            action={this.cancelBooking}
        />

        return <div>
            <div className={"row"}>
                <h1>V-Liberty !</h1>
                <Diaporama/>
            </div>
            {bookingResume}
            <div className={"row"}>
                <div className={"col m" + this.state.mapColSize}>
                    <MapContainer toggleBookingFormDisplayed={this.toggleBookingFormDisplayed}/>
                </div>
                {bookingForm}
            </div>
        </div>
    }
}

export default Layout
