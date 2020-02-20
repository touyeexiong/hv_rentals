const reservationById = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESERVATION_BY_ID':
            return action.payload;
        default:
            return state;
    }
}

export default reservationById;