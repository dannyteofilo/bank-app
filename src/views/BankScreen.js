import React from 'react'
import { ModalAdd } from '../components/ModalAdd'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { Table } from '../components/Table'
import { useDispatch } from 'react-redux'
import { fetch } from '../actions/branchs';
import { fetchEmployees } from '../actions/employees'
import { Loading } from '../components/Loading'

export const BankScreen = () => {
    const dispatch = useDispatch();
    // dispatch(fetch())


    const handleChooseBranch = (e) => {
        // dispatch(fetchEmployees(e))
    }

    return (
        <div className='bank__main-container'>
            <SideBar click={handleChooseBranch} />
            <main className='main'>
                <div className='bank__main-dashboard'>
                    <NavBar />
                    <Table />
                    <div className='add'>
                        <ModalAdd />
                    </div>
                </div>
            </main>
            <Loading />
        </div>
    )
}
