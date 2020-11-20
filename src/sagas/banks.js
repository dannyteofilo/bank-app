import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import service from '../services/banks';
import * as bank from '../actions/banks';
import { types } from '../types/types';

function* performFetch(action) {

    try {
        console.log('calling');
        yield put(bank.starts());

        const response = yield call(service.getBranches);
        yield put(bank.success(response));
    } catch (error) {
        yield put(bank.fails({
            error
        }));
    } finally {
        yield put(bank.ends());
    }
}

export default function* watchFetch() {
    yield takeLatest(types.bank_request_fetch, performFetch);
}