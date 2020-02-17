// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// function* fetchReservation(action) {
// try {
//     const response = yield axios.get('/api/myreservation', action.payload)
//     yield put({ type: 'SET_RESERVATIONS', payload: response.data });
//     console.log(action.payload);
    
// }
//     catch(error) {
//         console.log('reservvation GET has an error', error);
        
//     }
// }

// function* getReservationSaga() {
//     yield takeLatest ('FETCH_RESERVATION', fetchReservation);
// }

// export default getReservationSaga;