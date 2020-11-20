import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BankScreen } from './views/BankScreen'

export const BankApp = () => {
    return (
        <Provider store={store}>
            <BankScreen />
        </Provider>
    )
}
