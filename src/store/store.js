import { createStore, combineReducers } from 'redux';
import { currentBankReducer } from '../reducers/currentBank';


const reducers = combineReducers({
    currentBank: currentBankReducer,
})


export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());