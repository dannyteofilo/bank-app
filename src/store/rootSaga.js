import { fork,all } from 'redux-saga/effects';
import branchs from '../sagas/branchs';
import employees from '../sagas/employees';

export default function* rootSaga() {
    yield all([
        fork(branchs),
        fork(employees),
    ]);
}