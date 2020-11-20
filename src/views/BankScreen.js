import React from 'react'
import { EmployeForm } from '../components/EmployeForm'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { Table } from '../components/Table'

export const BankScreen = () => {
    return (
        <div className='bank__main-container'>
            <SideBar/>
            <main className='main'>
                <div className='bank__main-dashboard'>
                <NavBar/>
                <Table/>
                <EmployeForm/>
                </div>
            </main>
        </div>
    )
}
