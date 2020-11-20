import { fork,all } from 'redux-saga/effects';
import banks from '../sagas/banks';
import employees from '../sagas/employees';

export default function* rootSaga() {
    yield all([
        fork(banks),
        fork(employees),
    ]);
}