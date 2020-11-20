import React from 'react'

export const Table = () => {
    const employees = [
        {
            "id": 8,
            "name": "Raul",
            "middle_name": "Mdz",
            "last_name": "Sanz",
            "branch": 4
        },
        {
            "id": 10,
            "name": "Diana Her",
            "middle_name": "Patril Jane",
            "last_name": "Adrian",
            "branch": 4
        },
        {
            "id": 19,
            "name": "Sigourney Strickland",
            "middle_name": "Quinn Marsh",
            "last_name": "Jones",
            "branch": 4
        },
        {
            "id": 29,
            "name": "Test",
            "middle_name": "Marcos",
            "last_name": "Lopez",
            "branch": 4
        },
        {
            "id": 30,
            "name": "Test 2",
            "middle_name": "Luis",
            "last_name": "Trueno",
            "branch": 4
        }
    ]
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
