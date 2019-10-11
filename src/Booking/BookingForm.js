import React, {Component} from 'react'


class BookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    toggleDisplayBookingResume = (event) => {
        event.preventDefault();
        this.props.toggleDisplayBookingResume(event)
    }

    render() {
        return (
            <div style={{display: this.props.displayBookingForm}}>
                <h5>Station : {this.props.stationName} </h5>
                <p>{this.props.address}</p>
                <form onSubmit={(event) => this.toggleDisplayBookingResume(event)}>
                    <div className="row">
                        <div className={"input-field col m12"}>
                            <input name={"name"} placeholder={"Name"} type="text" value={this.state.value}
                                   onChange={this.handleChange}/>
                            <label htmlFor="name">Name</label>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Book the bike
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default BookingForm
