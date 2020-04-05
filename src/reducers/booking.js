const bookingReducer = (state, action) => {
    state = 150;
    //state.seconds = 11111;

    switch (action.type) {
        case 'RUN':
           /* if (action.payload.minutes === 0 && action.payload.seconds === 0) {
                // this.killChrono()
                // this.cancelBooking()
                return;
            } else if (action.payload.minutes === 20 && action.payload.seconds === 0) {
                state.minutes = action.payload.minutes - 1;
                state.seconds = 59;

            } else if (action.payload.seconds === 0) {
                state.minutes = this.state.minutes--;
                state.seconds = 59;
            } else {
                state.seconds = action.payload.seconds === 0;
            }*/
        default:
            return state;
    }
}

export default bookingReducer;
