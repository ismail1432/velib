const initialState = {
    minutes: 20,
    seconds: 0
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RUN':
            console.log(action.type);

            if (action.payload.minutes === 0 && action.payload.seconds === 0) {
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
                state.seconds = action.payload.seconds - 1;
            }

        // case 'STOP':
        //     console.log(action.type);
        //
        //     state.minutes = 20;
        //     state.seconds = 0;
        default:
            return state;
    }
}

export default bookingReducer;
