import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* reservedSpot(action) {
    try {
        // passes the reservation details from the payload to the server
        yield axios.post('/api/reservation/reserved', action.payload);
        console.log('this is what is in reservation post', action.payload);
        
        yield put ({
            type: 'GET_RESERVATIONS'
        })}
        catch (error) {
            console.log('reservation post broken at saga', error);
            
        }
}

function* reservationSaga() {
    yield takeLatest('POST_RESERVATION', reservedSpot);
}

export default reservationSaga;