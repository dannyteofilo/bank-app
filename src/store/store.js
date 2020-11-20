import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { bankReducer } from '../reducers/banks';
import { EmployeeReducer } from '../reducers/employees';
import { currentBankReducer } from '../reducers/currentBank';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    currentBank: currentBankReducer,
    banks: bankReducer,
    employees: EmployeeReducer,
})

let store = null;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    return new Promise((resolve, reject) => {
        try {
            store = createStore(
                reducers,
                composeEnhancers(
                    applyMiddleware(sagaMiddleware)
                )
            );
            sagaMiddleware.run(rootSaga);
            setTimeout(() => resolve(store));
        } catch (e) {
            reject(e);
        }
    });
}

export const getStore = () => {
    return store;
}

export default configureStore;
