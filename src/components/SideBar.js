import React from 'react'
import { ItemSideBar } from './ItemSideBar'

export const SideBar = () => {
    const items = [
        {
            "id": 1,
            "name": "Quinn Wiley",
            "bank": 4
        },
        {
            "id": 2,
            "name": "Josiah Montgomery",
            "bank": 2
        },
        {
            "id": 3,
            "name": "Hedley Todd",
            "bank": 2
        },
        {
            "id": 4,
            "name": "Victor Boone",
            "bank": 4
        }
    ]
    const handleEmployees = (e) => {
        console.log('employee: ', e);
    }
    return (
        <div className='sideBar__container'>
            <div className='main'>
                <div className='title'>
                    <h2>Bank App</h2>
                </div>
            </div>
            <div className='items'>
                {
                    items.map((item) => (
                        <ItemSideBar key={item.id} item={item} click={handleEmployees} />
                    ))
                }
            </div>
        </div>
    )
}
