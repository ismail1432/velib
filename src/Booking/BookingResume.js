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

    chrono = (chronoInStorage, resetChrono) => {
        if (chronoInStorage) {
            this.setState({
                minutes: localStorage.getItem('minutes'),
                seconds: localStorage.getItem('seconds')
            })
        }
        if (resetChrono) {
            this.killChrono()
        }

        this.chronoRun = setInterval(() => {
            var minutes = this.state.minutes
            var seconds = this.state.seconds

            if (minutes === 0 && seconds === 0) {
                this.killChrono()
                this.cancelBooking()
                return;
            } else if (this.state.minutes === START_MINUTES && this.state.seconds === 0) {
                minutes = this.state.minutes - 1;
                seconds = 59;

            } else if (this.state.seconds === 0) {
                minutes = this.state.minutes--;
                seconds = 59;
            } else {
                seconds = this.state.seconds - 1;
            }

            this.setState({
                minutes: minutes,
                seconds: seconds
            })
            this.saveInStorage()
        }, 1000);
    }

    render() {
        return <div className={"row"} style={{display: this.props.displayResume}}>
            <div className="card-panel">
                <p className="flow-text blue-text text-darken-2">
                    {localStorage.getItem('user') === null ? 'Congratulations' : 'Hurry Up'}
                    <span className={'red-text text-darken-2'}> {this.props.name}</span> ! <br/>
                    Your bike is booked
                    for {this.state.minutes} minutes {this.state.seconds}{this.state.seconds === 0 ? '0' : ''} seconds
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
