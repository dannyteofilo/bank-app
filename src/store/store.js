import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { bankReducer } from '../reducers/banks';
import { currentBankReducer } from '../reducers/currentBank';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    currentBank: currentBankReducer,
    banks: bankReducer
})

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

export default store;
