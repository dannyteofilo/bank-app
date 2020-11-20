import React from 'react'
import { ModalAdd } from '../components/ModalAdd'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { Table } from '../components/Table'

import { useDispatch } from 'react-redux'
import { fetch } from '../actions/banks';
export const BankScreen = () => {
    const dispatch = useDispatch();
    console.log('dispatch ::  : ');
    dispatch(fetch())
    return (
        <div className='bank__main-container'>
            <SideBar />
            <main className='main'>
                <div className='bank__main-dashboard'>
                    <NavBar />
                    <Table />
                    <div className='add'>
                    <ModalAdd/>
                    </div>
                </div>
            </main>
        </div>
    )
}
