import React from 'react'
import { Provider } from 'react-redux';
import  {getStore}  from './store/store';
import { BankScreen } from './views/BankScreen'

export const BankApp = () => {
    return (
        <Provider store={getStore()}>
            <BankScreen />
        </Provider>
    )
}
