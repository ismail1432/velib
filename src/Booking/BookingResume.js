import React, {Component} from 'react'
import Button from "../Utils/Button";

const START_MINUTES = 20;

class BookingResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: START_MINUTES,
            seconds: 0
        }
    }

    componentDidMount = () => {
        this.props.onRef(this)
    }

    cancelBooking = () => {
        this.props.action()
    }

    killChrono = () => {
        clearInterval(this.chronoRun)
        this.setState({
            minutes: START_MINUTES,
            seconds: 0
        })
    }

    saveInStorage = () => {
        localStorage.setItem('station', this.props.stationName)
        localStorage.setItem('user', this.props.name)
        localStorage.setItem('minutes', this.state.minutes)
        localStorage.setItem('seconds', this.state.seconds)
    }

    chrono = () => {
        this.chronoRun = setInterval(() => {
            if (this.state.minutes == START_MINUTES && this.state.seconds == 0) {
                let minutes = this.state.minutes - 1;
                let seconds = 59;
                this.setState({
                    minutes: minutes,
                    seconds: seconds
                })

            } else if (this.state.seconds == 0) {
                let minutes = this.state.minutes--;
                let seconds = 59;
                this.setState({
                    minutes: minutes,
                    seconds: seconds
                })
            } else {
                let seconds = this.state.seconds - 1;
                this.setState({
                    seconds: seconds
                })
            }
        }, 1000);

        this.saveInStorage()
    }

    render() {
        return <div className={"row"} style={{display: this.props.displayResume}}>
            <div className="card-panel">
                <p className="flow-text blue-text text-darken-2">Congratulations <span
                    className={'red-text text-darken-2'}> {this.props.name}</span> ! <br/>
                    Your bike is booked for {this.state.minutes} minutes {this.state.seconds}{ this.state.seconds == 0 ?'0':''} seconds
                    at the station: <span
                        className={'red-text text-darken-2'}>{this.props.stationName}</span></p>
                <p>
                    <Button action={this.cancelBooking} icon={'cancel'} btnSize={'large'}/>
                </p>
            </div>
        </div>
    }
}

export default BookingResume
