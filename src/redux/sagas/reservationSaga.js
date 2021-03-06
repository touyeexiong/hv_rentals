import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* reservedSpot(action) {
    try {
        // passes the reservation details from the payload to the server
        yield axios.post('/api/reservation/reserved', action.payload);

        yield put({
            type: 'GET_RESERVATION'
        })
    }
    catch (error) {
        console.log('reservation post broken at saga', error);

    }
}

function* fetchReservation(action) {
    try {
        const response = yield axios.get('/api/myreservation', action.payload)
        yield put({ type: 'SET_RESERVATIONS', payload: response.data });

    }
    catch (error) {
        console.log('reservvation GET has an error', error);

    }
}

function* resById(action) {
    try {
        const response = yield axios.get(`/api/myreservation/${action.payload}`)
        yield put({ type: `SET_RESERVATION_BY_ID`, payload: response.data })
    }
    catch (error) {
        console.log('reserById error', error);

    }

}

function* deleteReservation(action) {
    try {
        let response = yield axios.delete(`/api/reservation/delete/${action.payload}`)
        yield put({ type: 'FETCH_RESERVATION', payload: response.data })
    }
    catch (error) {
        console.log('error in delete', error);

    }

}

function* updateReservation(action) {
    try {
        let response = yield axios.put(`/api/reservation/update/${action.payload.reservation_id}`, action.payload);
        yield put({ type: 'PUT_RESERVATION', payload: response.data })
        yield put({ type: 'GET_RESERVATION' })
    }
    catch (error) {
        console.log('error in put', error);

    }
}

function* reservedAlready(action) {
    try {
        let response = yield axios.get(`/api/reservation/${action.payload}`)
        yield put({ type: 'RESERVATION_BY_RV', payload: response.data })
    }
    catch (error) {
        console.log('error in get reserved already', error);

    }
}


function* reservationSaga() {
    yield takeLatest('POST_RESERVATION', reservedSpot);
    yield takeLatest('FETCH_RESERVATION', fetchReservation)
    yield takeLatest('DELETE_RESERVATION', deleteReservation)
    yield takeLatest('UPDATE_RESERVATION', updateReservation)
    yield takeLatest('FETCH_RESERVED_ALREADY', reservedAlready)
    yield takeLatest('FETCH_RESERVATION_BY_ID', resById)
}

export default reservationSaga;