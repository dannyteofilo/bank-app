import React from 'react'
import { Loading } from './Loading'
import { useSelector } from 'react-redux'

export const Table = () => {

    const state = useSelector(state => state.employees)
    const { data } = state;
    let employees = [];
    if (data) {
        employees = data.results ? [...data.results] : [];
    }

    return (
        <div className='container mt-5'>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{index}</th>
                                <td>{item.name}</td>
                                <td>{item.middle_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>          
        </div>
    )
}
