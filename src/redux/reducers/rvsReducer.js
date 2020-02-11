const rvsReducer = ( state = [], action) => {
    switch (action.type) {
        case 'SET_RVS':
            return action.payload;
        default:
            return state;
    }
}

export default rvsReducer;