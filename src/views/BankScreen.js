import React from 'react'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'
import { Table } from '../components/Table'

export const BankScreen = () => {
    return (
        <div className='bank__main-container'>
            <SideBar/>
            <main>
                <div className='bank__main-dashboard'>
                <NavBar/>
                <Table/>
                </div>
            </main>
        </div>
    )
}
