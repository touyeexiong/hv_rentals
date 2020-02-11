import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { response } from 'express';

function* fetchRVs() {
    try {
        const response = yield axios.get('/api/rvs')
        yield put({ type: 'SET_RVS', payload: response.data });
    }
    catch (error) {
        console.log('RV Get request failed', errror);
    }
}






function* rvsSaga() {
    yield takeLatest('FETCH_RVS', fetchRVs);
}

export default rvsSaga;