const reservationByRv = (state = [], action) => {
    switch (action.type) {
        case 'RESERVATION_BY_RV':
            return action.payload;
        default:
            return state;
    }
}

export default reservationByRv;