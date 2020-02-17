const getReserReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESERVATIONS':
            return action.payload;
        default:
            return state;
    }
}

export default getReserReducer;