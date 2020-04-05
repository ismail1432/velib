export const run = (id, payload) => {
    return {
        type: 'RUN',
        payload: payload
    }
}

export const stop = () => {
    return {
        type: 'STOP'
    }
}
