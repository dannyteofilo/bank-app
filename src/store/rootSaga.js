import { fork,all } from 'redux-saga/effects';
import branchs from '../sagas/branchs';
import employees from '../sagas/employees';
import addEmployee from '../sagas/addEmployee';

export default function* rootSaga() {
    yield all([
        fork(branchs),
        fork(employees),
        fork(addEmployee),
    ]);
}