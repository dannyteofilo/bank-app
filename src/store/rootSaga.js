import { fork,all } from 'redux-saga/effects';
import banks from '../sagas/banks';

export default function* rootSaga() {
    yield all([
        fork(banks),
    ]);
}