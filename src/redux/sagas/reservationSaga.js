import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* reservedSpot(action) {
    try {
        // passes the reservation details from the payload to the server
        yield axios.post('/api/reservation/reserved', action.payload);
        console.log('this is what is in reservation post', action.payload);
        
        yield put ({
            type: 'GET_RESERVATION'
        })}
        catch (error) {
            console.log('reservation post broken at saga', error);
            
        }
}

function* fetchReservation(action) {
    try {
        const response = yield axios.get('/api/myreservation', action.payload)
        yield put({ type: 'SET_RESERVATIONS', payload: response.data });
        console.log(action.payload);

    }
    catch (error) {
        console.log('reservvation GET has an error', error);

    }
}


function* reservationSaga() {
    yield takeLatest('POST_RESERVATION', reservedSpot);
    yield takeLatest('FETCH_RESERVATION', fetchReservation)
}

export default reservationSaga;