import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';

import service from '../services/banks';
import * as bank from '../actions/employees';
import { types } from '../types/types';

function* performFetch(action) {

    try {
        yield put(bank.starts());

        const response = yield call(service.getEmployees,action.payload);
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
    yield takeLatest(types.employee_request_fetch, performFetch);
}