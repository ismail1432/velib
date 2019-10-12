import React, {Component} from 'react'
import Button from "../Button";

class BookingResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 20,
            seconds: 0
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    cancelBooking = () => {
        this.props.action()
        clearInterval(this.chrono)
    }

    chrono = () => {
        setInterval(() => {
            if (this.state.minutes == 20 && this.state.seconds == 0) {
                let minutes = 19;
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
                console.log(seconds)
                this.setState({
                    seconds: seconds
                })
            }


        }, 1000);
    }

    render() {

        return <div className={"row"} style={{display: this.props.displayResume}}>
            <div className="card-panel">
                <p className="flow-text blue-text text-darken-2">Congratulations <span
                    className={'red-text text-darken-2'}> {this.props.name}</span> ! <br/>
                    Your bike is booked, You have {this.state.minutes} : {this.state.seconds}
                    minutes to get it at Station: <span
                        className={'red-text text-darken-2'}>{this.props.stationName}</span></p>
                <p>
                    <Button action={this.cancelBooking} icon={'cancel'}/>
                </p>
            </div>
        </div>
    }
}

export default BookingResume
